// autogenerated by compiler/precompile.js
import { number } from './embedding.js';

export const BuiltinFuncs = function() {
  this.__Array_isArray = {
    wasm: (scope, { allocPage, builtin }) => [[32,1],[65,16],[70],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127],
    returnType: 1,
    locals: [],
    localNames: ["x","x#type"],
  };
  this.btoa = {
    wasm: (scope, { allocPage, builtin }) => [...number(allocPage(scope, 'bytestring: keyStr', 'i8') * pageSize, 127),[34,2],[33,3],[32,0],[40,1,0],[33,4],...number(allocPage(scope, 'bytestring: output', 'i8') * pageSize, 127),[33,5],[65,0],[65,4],[32,4],[65,3],[109],[32,4],[65,3],[111],[69],[69],[106],[108],[34,6],[54,1,128,128,4],[32,0],[33,7],[32,5],[33,8],[32,7],[32,4],[106],[33,9],[65,0],[33,10],[3,64],[32,7],[32,9],[72],[4,64],[32,7],[32,7],[65,1],[106],[33,7],[45,0,4],[33,11],[32,7],[32,9],[72],[4,127],[32,7],[32,7],[65,1],[106],[33,7],[45,0,4],[65,0],[33,13],[5],[65,127],[65,0],[33,13],[11],[33,12],[32,7],[32,9],[72],[4,127],[32,7],[32,7],[65,1],[106],[33,7],[45,0,4],[65,0],[33,13],[5],[65,127],[65,0],[33,13],[11],[33,14],[32,11],[65,2],[117],[33,15],[32,11],[65,3],[113],[65,4],[116],[32,12],[65,127],[70],[4,127],[65,0],[65,0],[33,13],[5],[32,12],[65,4],[117],[65,0],[33,13],[11],[114],[33,16],[32,12],[65,15],[113],[65,2],[116],[32,14],[65,127],[70],[4,127],[65,0],[65,0],[33,13],[5],[32,14],[65,6],[117],[65,0],[33,13],[11],[114],[33,17],[32,14],[65,63],[113],[33,18],[32,12],[65,127],[70],[4,64],[65,192,0],[33,17],[65,192,0],[33,18],[5],[32,14],[65,127],[70],[4,64],[65,192,0],[33,18],[11],[11],[32,8],[32,8],[65,1],[106],[33,8],[32,3],[32,15],[106],[45,0,4],[58,0,4],[32,8],[32,8],[65,1],[106],[33,8],[32,3],[32,16],[106],[45,0,4],[58,0,4],[32,8],[32,8],[65,1],[106],[33,8],[32,3],[32,17],[106],[45,0,4],[58,0,4],[32,8],[32,8],[65,1],[106],[33,8],[32,3],[32,18],[106],[45,0,4],[58,0,4],[12,1],[11],[11],[32,5],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127],
    returnType: 18,
    locals: [127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127,127],
    localNames: ["input","input#type","keyStr","keyStrPtr","len","output","__length_setter_tmp","i","j","endPtr","endPtr#type","chr1","chr2","#last_type","chr3","enc1","enc2","enc3","enc4"],
    data: [{"offset":0,"bytes":[65,0,0,0,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47,61]}],
  };
  this.__crypto_randomUUID = {
    wasm: (scope, { allocPage, builtin }) => [...number(allocPage(scope, 'bytestring: bytes', 'i8') * pageSize, 127),[34,0],[34,1],[34,2],[65,16],[106],[33,3],[3,64],[32,2],[32,3],[72],[4,64],[32,2],[32,2],[65,1],[106],[33,2],[16, builtin('__Porffor_randomByte')],[58,0,4],[12,1],[11],[11],[32,1],[32,1],[45,0,10],[65,15],[113],[65,192,0],[114],[58,0,10],[32,1],[32,1],[45,0,12],[65,63],[113],[65,128,1],[114],[58,0,12],...number(allocPage(scope, 'bytestring: output', 'i8') * pageSize, 127),[34,4],[33,5],[32,1],[33,6],[32,5],[65,8],[106],[33,7],[3,64],[32,5],[32,7],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[34,8],[65,15],[113],[65,48],[106],[34,9],[65,57],[74],[4,64],[32,9],[65,39],[106],[33,9],[11],[32,8],[65,4],[117],[65,48],[106],[34,10],[65,57],[74],[4,64],[32,10],[65,39],[106],[33,10],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,10],[58,0,4],[32,5],[32,5],[65,1],[106],[33,5],[32,9],[58,0,4],[12,1],[11],[11],[32,5],[65,1],[106],[34,5],[65,4],[106],[33,7],[3,64],[32,5],[32,7],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[34,8],[65,15],[113],[65,48],[106],[34,9],[65,57],[74],[4,64],[32,9],[65,39],[106],[33,9],[11],[32,8],[65,4],[117],[65,48],[106],[34,10],[65,57],[74],[4,64],[32,10],[65,39],[106],[33,10],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,10],[58,0,4],[32,5],[32,5],[65,1],[106],[33,5],[32,9],[58,0,4],[12,1],[11],[11],[32,5],[65,1],[106],[34,5],[65,4],[106],[33,7],[3,64],[32,5],[32,7],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[34,8],[65,15],[113],[65,48],[106],[34,9],[65,57],[74],[4,64],[32,9],[65,39],[106],[33,9],[11],[32,8],[65,4],[117],[65,48],[106],[34,10],[65,57],[74],[4,64],[32,10],[65,39],[106],[33,10],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,10],[58,0,4],[32,5],[32,5],[65,1],[106],[33,5],[32,9],[58,0,4],[12,1],[11],[11],[32,5],[65,1],[106],[34,5],[65,4],[106],[33,7],[3,64],[32,5],[32,7],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[34,8],[65,15],[113],[65,48],[106],[34,9],[65,57],[74],[4,64],[32,9],[65,39],[106],[33,9],[11],[32,8],[65,4],[117],[65,48],[106],[34,10],[65,57],[74],[4,64],[32,10],[65,39],[106],[33,10],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,10],[58,0,4],[32,5],[32,5],[65,1],[106],[33,5],[32,9],[58,0,4],[12,1],[11],[11],[32,5],[65,1],[106],[34,5],[65,12],[106],[33,7],[3,64],[32,5],[32,7],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[34,8],[65,15],[113],[65,48],[106],[34,9],[65,57],[74],[4,64],[32,9],[65,39],[106],[33,9],[11],[32,8],[65,4],[117],[65,48],[106],[34,10],[65,57],[74],[4,64],[32,10],[65,39],[106],[33,10],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,10],[58,0,4],[32,5],[32,5],[65,1],[106],[33,5],[32,9],[58,0,4],[12,1],[11],[11],[32,5],[65,1],[106],[33,5],[32,4],[15]],
    params: [],
    typedParams: true,
    returns: [127],
    returnType: 18,
    locals: [127,127,127,127,127,127,127,127,127,127,127],
    localNames: ["bytes","bytesPtr","a","aEndPtr","output","i","j","endPtr","byte","lower","upper"],
    data: [{"offset":0,"bytes":[16,0,0,0,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46]},{"offset":65536,"bytes":[36,0,0,0,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45]}],
  };
  this.escape = {
    wasm: (scope, { allocPage, builtin }) => [...number(allocPage(scope, 'bytestring: lut', 'i8') * pageSize, 127),[33,2],[32,0],[40,1,0],[34,3],[33,4],[32,0],[33,5],[32,1],[65,18],[70],[4,64],[32,5],[32,3],[106],[33,6],[3,64],[32,5],[32,6],[72],[4,64],[32,5],[32,5],[65,1],[106],[33,5],[45,0,4],[34,7],[65,128,1],[72],[4,64],[32,2],[32,7],[106],[45,0,4],[4,64],[12,3],[11],[11],[32,4],[65,2],[106],[33,4],[12,1],[11],[11],[32,4],[32,3],[70],[4,64],[32,0],[15],[11],...number(allocPage(scope, 'bytestring: output', 'i8') * pageSize, 127),[33,8],[65,0],[32,4],[34,9],[54,1,128,128,4],[32,0],[33,5],[32,8],[33,10],[3,64],[32,5],[32,6],[72],[4,64],[32,5],[32,5],[65,1],[106],[33,5],[45,0,4],[34,7],[65,128,1],[72],[4,64],[32,2],[32,7],[106],[45,0,4],[4,64],[32,10],[32,10],[65,1],[106],[33,10],[32,7],[58,0,4],[12,3],[11],[11],[32,10],[32,10],[65,1],[106],[33,10],[65,37],[58,0,4],[32,7],[65,15],[113],[65,48],[106],[34,11],[65,57],[74],[4,64],[32,11],[65,7],[106],[33,11],[11],[32,7],[65,4],[117],[65,48],[106],[34,12],[65,57],[74],[4,64],[32,12],[65,7],[106],[33,12],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,12],[58,0,4],[32,10],[32,10],[65,1],[106],[33,10],[32,11],[58,0,4],[12,1],[11],[11],[32,8],[15],[11],[32,5],[32,3],[65,2],[108],[106],[33,6],[3,64],[32,5],[32,6],[72],[4,64],[32,5],[47,0,4],[33,7],[32,5],[65,2],[106],[33,5],[32,7],[65,128,1],[72],[4,64],[32,2],[32,7],[106],[45,0,4],[4,64],[12,3],[11],[11],[32,7],[65,128,2],[72],[4,64],[32,4],[65,2],[106],[33,4],[5],[32,4],[65,5],[106],[33,4],[11],[12,1],[11],[11],[32,4],[32,3],[70],[4,64],[32,0],[15],[11],[65,0],[65,0],[54,1,128,128,4],[65,128,128,4],[33,8],[65,0],[32,4],[34,9],[54,1,128,128,4],[32,0],[33,5],[32,8],[33,10],[3,64],[32,5],[32,6],[72],[4,64],[32,5],[47,0,4],[33,7],[32,5],[65,2],[106],[33,5],[32,7],[65,128,1],[72],[4,64],[32,2],[32,7],[106],[45,0,4],[4,64],[32,10],[32,10],[65,1],[106],[33,10],[32,7],[58,0,4],[12,3],[11],[11],[32,7],[65,128,2],[72],[4,64],[32,10],[32,10],[65,1],[106],[33,10],[65,37],[58,0,4],[32,7],[65,15],[113],[65,48],[106],[34,11],[65,57],[74],[4,64],[32,11],[65,7],[106],[33,11],[11],[32,7],[65,4],[117],[65,48],[106],[34,12],[65,57],[74],[4,64],[32,12],[65,7],[106],[33,12],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,12],[58,0,4],[32,10],[32,10],[65,1],[106],[33,10],[32,11],[58,0,4],[5],[32,10],[65,165,234,1],[59,0,4],[32,10],[65,2],[106],[33,10],[32,7],[65,12],[117],[65,15],[113],[65,48],[106],[34,13],[65,57],[74],[4,64],[32,13],[65,7],[106],[33,13],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,13],[58,0,4],[32,7],[65,8],[117],[65,15],[113],[65,48],[106],[34,13],[65,57],[74],[4,64],[32,13],[65,7],[106],[33,13],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,13],[58,0,4],[32,7],[65,4],[117],[65,15],[113],[65,48],[106],[34,13],[65,57],[74],[4,64],[32,13],[65,7],[106],[33,13],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,13],[58,0,4],[32,7],[65,15],[113],[65,48],[106],[34,13],[65,57],[74],[4,64],[32,13],[65,7],[106],[33,13],[11],[32,10],[32,10],[65,1],[106],[33,10],[32,13],[58,0,4],[11],[12,1],[11],[11],[32,8],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127],
    returnType: 18,
    locals: [127,127,127,127,127,127,127,127,127,127,127,127],
    localNames: ["input","input#type","lut","len","outLength","i","endPtr","chr","output","__length_setter_tmp","j","lower","upper","nibble"],
    data: [{"offset":0,"bytes":[128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]}],
  };
  this.__String_fromCharCode = {
    wasm: (scope, { allocPage, builtin }) => [[32,0],[65,128,2],[72],[4,64],...number(allocPage(scope, 'bytestring: out', 'i8') * pageSize, 127),[34,2],[32,0],[58,0,4],[32,2],[65,18],[15],[11],[65,0],[65,1],[54,1,0],[65,0],[65,46],[58,0,4],[65,0],[34,2],[32,0],[59,0,4],[32,2],[65,2],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127],
    localNames: ["code","code#type","out"],
    data: [{"offset":0,"bytes":[1,0,0,0,46]}],
  };
  this.__String_prototype_toUpperCase = {
    wasm: (scope, { allocPage, builtin }) => [[65,[0]],[8,0],[65,0],[65,3],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [],
    localNames: ["_this","_this#type"],
    exceptions: [{"constructor":"TodoError","message":"String.prototype.toUpperCase (non-bytestring)","exceptId":0}],
  };
  this.___bytestring_prototype_toUpperCase = {
    wasm: (scope, { allocPage, builtin }) => [[32,0],[40,1,0],[33,2],[65,0],[34,3],[32,2],[54,0,0],[32,0],[33,4],[32,3],[33,5],[32,4],[32,2],[106],[33,6],[3,64],[32,4],[32,6],[72],[4,64],[32,4],[32,4],[65,1],[106],[33,4],[45,0,4],[34,7],[65,225,0],[78],[34,8],[4,127],[32,7],[65,250,0],[76],[65,1],[33,9],[5],[32,8],[65,1],[33,9],[11],[33,10],[32,9],[33,11],[2,127],[32,11],[65,18],[70],[4,64,"TYPESWITCH|ByteString"],[32,10],[40,1,0],[12,1],[11],[32,10],[11,"TYPESWITCH_end"],[4,64],[32,7],[65,32],[107],[33,7],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,7],[58,0,4],[12,1],[11],[11],[32,3],[65,18],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","len","out","i","j","endPtr","chr","logictmp","#last_type","#logicinner_tmp","#typeswitch_tmp"],
  };
  this.__String_prototype_toLowerCase = {
    wasm: (scope, { allocPage, builtin }) => [[65,[1]],[8,0],[65,0],[65,3],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [],
    localNames: ["_this","_this#type"],
    exceptions: [{"constructor":"TodoError","message":"String.prototype.toLowerCase (non-bytestring)","exceptId":1}],
  };
  this.___bytestring_prototype_toLowerCase = {
    wasm: (scope, { allocPage, builtin }) => [[32,0],[40,1,0],[33,2],[65,0],[34,3],[32,2],[54,0,0],[32,0],[33,4],[32,3],[33,5],[32,4],[32,2],[106],[33,6],[3,64],[32,4],[32,6],[72],[4,64],[32,4],[32,4],[65,1],[106],[33,4],[45,0,4],[34,7],[65,193,0],[78],[34,8],[4,127],[32,7],[65,218,0],[76],[65,1],[33,9],[5],[32,8],[65,1],[33,9],[11],[33,10],[32,9],[33,11],[2,127],[32,11],[65,18],[70],[4,64,"TYPESWITCH|ByteString"],[32,10],[40,1,0],[12,1],[11],[32,10],[11,"TYPESWITCH_end"],[4,64],[32,7],[65,32],[106],[33,7],[11],[32,5],[32,5],[65,1],[106],[33,5],[32,7],[58,0,4],[12,1],[11],[11],[32,3],[65,18],[15]],
    params: [127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","len","out","i","j","endPtr","chr","logictmp","#last_type","#logicinner_tmp","#typeswitch_tmp"],
  };
  this.__String_prototype_startsWith = {
    wasm: (scope, { allocPage, builtin }) => [[32,0],[33,6],[32,2],[33,7],[32,0],[40,1,0],[33,8],[32,4],[65,0],[74],[4,64],[32,4],[32,8],[74],[4,64],[32,8],[34,4],[65,0],[33,5],[26],[5],[32,4],[65,0],[114],[34,4],[65,0],[33,5],[26],[11],[5],[65,0],[34,4],[65,0],[33,5],[26],[11],[32,6],[32,4],[65,2],[108],[106],[33,6],[32,2],[40,1,0],[65,2],[108],[33,9],[65,0],[33,10],[3,64],[32,10],[32,9],[72],[4,64],[32,6],[32,10],[106],[47,0,4],[33,11],[32,7],[32,10],[106],[47,0,4],[33,12],[32,11],[32,12],[71],[4,64],[65,0],[65,1],[15],[11],[32,10],[65,2],[106],[34,10],[12,1],[11],[11],[65,1],[65,1],[15]],
    params: [127,127,127,127,127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","searchString","searchString#type","position","position#type","thisPtr","searchPtr","len","searchLen","i","chr","expected"],
  };
  this.___bytestring_prototype_startsWith = {
    wasm: (scope, { allocPage, builtin }) => [[32,3],[65,18],[71],[4,64],[65,0],[65,1],[15],[11],[32,0],[33,6],[32,2],[33,7],[32,0],[40,1,0],[33,8],[32,4],[65,0],[74],[4,64],[32,4],[32,8],[74],[4,64],[32,8],[34,4],[65,0],[33,5],[26],[5],[32,4],[65,0],[114],[34,4],[65,0],[33,5],[26],[11],[5],[65,0],[34,4],[65,0],[33,5],[26],[11],[32,6],[32,4],[106],[33,6],[32,2],[40,1,0],[33,9],[65,0],[33,10],[3,64],[32,10],[32,9],[72],[4,64],[32,6],[32,10],[106],[45,0,4],[33,11],[32,7],[32,10],[106],[45,0,4],[33,12],[32,11],[32,12],[71],[4,64],[65,0],[65,1],[15],[11],[32,10],[65,1],[106],[33,10],[12,1],[11],[11],[65,1],[65,1],[15]],
    params: [127,127,127,127,127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","searchString","searchString#type","position","position#type","thisPtr","searchPtr","len","searchLen","i","chr","expected"],
  };
  this.__String_prototype_endsWith = {
    wasm: (scope, { allocPage, builtin }) => [[32,0],[33,6],[32,2],[33,7],[32,2],[40,1,0],[33,8],[32,0],[40,1,0],[33,9],[32,5],[65,3],[70],[4,64],[32,9],[34,4],[65,0],[33,5],[26],[11],[32,4],[65,0],[74],[4,64],[32,4],[32,9],[74],[4,64],[32,9],[34,4],[65,0],[33,5],[26],[5],[32,4],[65,0],[114],[34,4],[65,0],[33,5],[26],[11],[5],[65,0],[34,4],[65,0],[33,5],[26],[11],[32,4],[32,8],[107],[34,4],[65,0],[33,5],[26],[32,4],[65,0],[72],[4,64],[65,0],[65,1],[15],[11],[32,6],[32,4],[65,2],[108],[106],[33,6],[32,7],[32,8],[65,2],[108],[106],[33,10],[3,64],[32,7],[32,10],[72],[4,64],[32,6],[47,0,4],[33,11],[32,7],[47,0,4],[33,12],[32,6],[65,2],[106],[33,6],[32,7],[65,2],[106],[33,7],[32,11],[32,12],[71],[4,64],[65,0],[65,1],[15],[11],[12,1],[11],[11],[65,1],[65,1],[15]],
    params: [127,127,127,127,127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","searchString","searchString#type","endPosition","endPosition#type","i","j","searchLen","len","endPtr","chr","expected"],
  };
  this.___bytestring_prototype_endsWith = {
    wasm: (scope, { allocPage, builtin }) => [[32,3],[65,18],[71],[4,64],[65,0],[65,1],[15],[11],[32,0],[33,6],[32,2],[33,7],[32,2],[40,1,0],[33,8],[32,0],[40,1,0],[33,9],[32,5],[65,3],[70],[4,64],[32,9],[34,4],[65,0],[33,5],[26],[11],[32,4],[65,0],[74],[4,64],[32,4],[32,9],[74],[4,64],[32,9],[34,4],[65,0],[33,5],[26],[5],[32,4],[65,0],[114],[34,4],[65,0],[33,5],[26],[11],[5],[65,0],[34,4],[65,0],[33,5],[26],[11],[32,4],[32,8],[107],[34,4],[65,0],[33,5],[26],[32,4],[65,0],[72],[4,64],[65,0],[65,1],[15],[11],[32,6],[32,4],[106],[33,6],[32,7],[32,8],[106],[33,10],[3,64],[32,7],[32,10],[72],[4,64],[32,6],[32,6],[65,1],[106],[33,6],[45,0,4],[33,11],[32,7],[32,7],[65,1],[106],[33,7],[45,0,4],[33,12],[32,11],[32,12],[71],[4,64],[65,0],[65,1],[15],[11],[12,1],[11],[11],[65,1],[65,1],[15]],
    params: [127,127,127,127,127,127],
    typedParams: true,
    returns: [127,127],
    typedReturns: true,
    locals: [127,127,127,127,127,127,127],
    localNames: ["_this","_this#type","searchString","searchString#type","endPosition","endPosition#type","i","j","searchLen","len","endPtr","chr","expected"],
  };
};