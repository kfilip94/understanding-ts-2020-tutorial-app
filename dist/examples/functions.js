"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ', num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResults(add(2, 4));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
console.log(addAndHandle(8, 8, function (result) { return console.log('Result from callback: ', result); }));
