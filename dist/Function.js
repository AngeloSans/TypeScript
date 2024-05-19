"use strict";
var a = 12;
var b = 13;
function soma(a, b) {
    return a + b;
}
// Arrow function equivalente
var soma2 = function (a, b) {
    return a + b;
};
// Arrow function ainda mais concisa (quando o corpo da função tem uma única expressão)
var soma3 = function (a, b) { return a + b; };
function getMensage() {
    console.log("hi there");
}
