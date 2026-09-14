"use strict";
var c = 5;
console.log(c);
function a() {
    return 67;
}
c = a();
console.log(c);
var tuple = [10, "alma"];
console.log(tuple[0]);
console.log(tuple[1]);
function tupleffff() {
    return [67, "nnyaw"];
}
var napok;
(function (napok) {
    napok[napok["hetfo"] = 0] = "hetfo";
    napok[napok["kedd"] = 1] = "kedd";
    napok[napok["szerda"] = 2] = "szerda";
    napok[napok["csutortok"] = 3] = "csutortok";
    napok[napok["pentek"] = 4] = "pentek";
    napok[napok["szombat"] = 5] = "szombat";
    napok[napok["vasarnap"] = 6] = "vasarnap";
    napok[napok["jodolgunkvanminterdonamadarnak"] = 67] = "jodolgunkvanminterdonamadarnak";
})(napok || (napok = {}));
console.log(napok.jodolgunkvanminterdonamadarnak);
