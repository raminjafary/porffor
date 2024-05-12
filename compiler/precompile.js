import { Opcodes } from './wasmSpec.js';
import { TYPES } from './types.js';

import fs from 'node:fs';
import { join } from 'node:path';

import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// import porfParse from './parse.js';
// import porfCodegen from './codeGen.js';

const argv = process.argv.slice();

const compile = async (file, [ _funcs, _globals ]) => {
  let source = fs.readFileSync(file, 'utf8');
  let first = source.slice(0, source.indexOf('\n'));

  if (first.startsWith('export default')) {
    source = (await import(file)).default();
    first = source.slice(0, source.indexOf('\n'));
  }

  let args = ['--bytestring', '--todo-time=compile', '--no-aot-pointer-opt', '--no-treeshake-wasm-imports', '--scoped-page-names', '--parse-types', '--opt-types'];
  if (first.startsWith('// @porf')) {
    args = args.concat(first.slice('// @porf '.length).split(' '));
  }
  process.argv = argv.concat(args);

  // const porfParse = (await import(`./parse.js?_=${Date.now()}`)).default;
  // const porfCodegen = (await import(`./codeGen.js?_=${Date.now()}`)).default;

  // let { funcs, globals, data } = porfCodegen(porfParse(source, ['module']));

  const porfCompile = (await import(`./index.js?_=${Date.now()}`)).default;

  let { funcs, globals, data, exceptions } = porfCompile(source, ['module']);

  const allocated = new Set();

  const exports = funcs.filter(x => x.export && x.name !== 'main');
  for (const x of exports) {
    if (x.data) {
      x.data = x.data.map(x => data[x]);
      for (const y in x.data) {
        x.data[y].offset -= x.data[0].offset;
      }
    }
    if (x.exceptions) x.exceptions = x.exceptions.map(x => {
      const obj = exceptions[x];
      if (obj) obj.exceptId = x;
      return obj;
    }).filter(x => x);

    const locals = Object.keys(x.locals).reduce((acc, y) => {
      acc[x.locals[y].idx] = { ...x.locals[y], name: y };
      return acc;
    }, {});

    for (let i = 0; i < x.wasm.length; i++) {
      const y = x.wasm[i];
      const n = x.wasm[i + 1];
      if (y[0] === Opcodes.call) {
        const f = funcs.find(x => x.index === y[1]);
        if (!f) continue;

        y[1] = f.name;
      }

      if (y[0] === Opcodes.const && (n[0] === Opcodes.local_set || n[0] === Opcodes.local_tee)) {
        const l = locals[n[1]];
        if (!l) continue;
        if (![TYPES.string, TYPES.array, TYPES.bytestring].includes(l.metadata?.type)) continue;
        if (!x.pages) continue;

        const pageName = [...x.pages.keys()].find(z => z.endsWith(l.name));
        if (!pageName || allocated.has(pageName)) continue;
        allocated.add(pageName);

        y.splice(0, 10, 'alloc', pageName, x.pages.get(pageName).type, valtypeBinary);
        // y.push(x.pages.get(pageName));
      }
    }
  }

  _funcs.push(...exports);
  _globals.push(...Object.values(globals));
};

const precompile = async () => {
  const dir = join(__dirname, 'builtins');

  let funcs = [], globals = [];
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('.d.ts')) continue;
    console.log(file);

    await compile(join(dir, file), [ funcs, globals ]);
  }

  // const a = funcs.find(x => x.name === '__ecma262_ToUTCDTSF');
  // console.log(Object.values(a.locals).slice(a.params.length));

  // ${x.pages && x.pages.size > 0 ? `    pages: ${JSON.stringify(Object.fromEntries(x.pages.entries()))},` : ''}
  // ${x.used && x.used.length > 0 ? `    used: ${JSON.stringify(x.used)},` : ''}

  return `// autogenerated by compiler/precompile.js
import { number } from './embedding.js';

export const BuiltinFuncs = function() {
${funcs.map(x => `  this.${x.name} = {
    wasm: (scope, { allocPage, builtin }) => ${JSON.stringify(x.wasm.filter(x => x.length && x[0] != null)).replace(/\["alloc","(.*?)","(.*?)",(.*?)\]/g, (_, reason, type, valtype) => `...number(allocPage(scope, '${reason}', '${type}') * pageSize, ${valtype})`).replace(/\[16,"(.*?)"]/g, (_, name) => `[16, builtin('${name}')]`)},
    params: ${JSON.stringify(x.params)},
    typedParams: true,
    returns: ${JSON.stringify(x.returns)},
    ${x.returnType != null ? `returnType: ${JSON.stringify(x.returnType)}` : 'typedReturns: true'},
    locals: ${JSON.stringify(Object.values(x.locals).slice(x.params.length).map(x => x.type))},
    localNames: ${JSON.stringify(Object.keys(x.locals))},
${x.data && x.data.length > 0 ? `    data: ${JSON.stringify(x.data)},` : ''}
${x.exceptions && x.exceptions.length > 0 ? `    exceptions: ${JSON.stringify(x.exceptions)},` : ''}
  };`.replaceAll('\n\n', '\n').replaceAll('\n\n', '\n')).join('\n')}
};`;
};

const code = await precompile();
// console.log(code);

fs.writeFileSync(join(__dirname, 'generated_builtins.js'), code);