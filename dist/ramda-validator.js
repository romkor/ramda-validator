!function(r,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("ramda")):"function"==typeof define&&define.amd?define(["ramda"],n):"object"==typeof exports?exports.RV=n(require("ramda")):r.RV=n(r.R)}(this,function(r){return function(r){function n(t){if(e[t])return e[t].exports;var o=e[t]={exports:{},id:t,loaded:!1};return r[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=r,n.c=e,n.p="",n(0)}([function(r,n,e){r.exports={validator:e(18),required:e(17),permitAll:e(15),number:e(14),min:e(12),max:e(10),minLength:e(13),maxLength:e(11),rangeLength:e(16),eq:e(7),lt:e(9),gt:e(8),all:e(3),field:e(2),fields:e(4),ifThen:e(5)}},function(n,e){n.exports=r},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){return t.chain(function(n){return n(r)},n)})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){return t.chain(r,n)})},function(r,n,e){var t=e(1),o=e(2);r.exports=t.curry(function(r,n){return t.chain(function(r){return o(r,n)},r)})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){return t.chain(function(n){return n["@@enabled"]=t.allPass(r),n},n)})},function(r,n,e){var t=e(1);r.exports=function(r){return"Array"==t.type(r)?t.path(r):t.prop(r)}},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r],t[n]],t[r].length===t[n]};return e["@@error"]="match",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r],t[n]],t[r].length>t[n]};return e["@@error"]="greaterThan",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r],t[n]],t[r].length<t[n]};return e["@@error"]="lessThan",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r],n],t[r]<=n};return e["@@error"]="max",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r].length,n],t[r].length<=n};return e["@@error"]="maxLength",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r],n],t[r]>=n};return e["@@error"]="min",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n){var e=function(t){return e["@@context"]=[t[r].length,n],t[r].length>=n};return e["@@error"]="minLength",e["@@enabled"]=t.T,e["@@field"]=[r],[e]})},function(r,n,e){var t=e(1);r.exports=function(r){var n=function(e){return n["@@context"]=[t.type(e[r])],"Number"==t.type(e[r])};return n["@@error"]="number",n["@@enabled"]=t.T,n["@@field"]=[r],[n]}},function(r,n,e){var t=e(1);r.exports=function(r){var n=function(e){return t.reduce(function(e,t){return-1===r.indexOf(t)?(n["@@field"].push(t),!1):void 0},!0,Object.keys(e))};return n["@@error"]="permitParam",n["@@enabled"]=t.T,n["@@field"]=[],n["@@context"]=[r],[n]}},function(r,n,e){var t=e(1);r.exports=t.curry(function(r,n,e){var o=function(t){return o["@@context"]=[t[r].length,n,e],t[r].length>=n&&t[r].length<=e};return o["@@error"]="rangeLength",o["@@enabled"]=t.T,o["@@field"]=[r],[o]})},function(r,n,e){var t=e(1),o=e(6);r.exports=function(r){var n=function(e){return n["@@context"]=[null],t.pipe(o(r),t.isNil,t.not)(e)};return n["@@error"]="required",n["@@enabled"]=t.T,n["@@field"]=[r],[n]}},function(r,n,e){var t=e(1),o=function(r,n,e){r["@@enabled"](e)&&!r(e)&&(n.valid=!1,r["@@field"].forEach(function(e){void 0===n.fields[e]&&(n.fields[e]={errors:{}}),n.fields[e].errors[r["@@error"]]=r["@@context"]}))};r.exports=t.curry(function(r,n){return t.reduce(function(r,e){return o(e,r,n),r},{valid:!0,fields:{}},t.flatten(r))})}])});