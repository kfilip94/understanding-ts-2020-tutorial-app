"use strict";
function combine(input1, input2, resultConversion) {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
}
var combinedAges = combine(21, 46, 'as-number');
console.log(combinedAges);
var combnedStringAges = combine('21', '46', 'as-number');
console.log(combnedStringAges);
var combinedNames = combine('Kamil', 'Marta', 'as-text');
console.log(combinedNames);
