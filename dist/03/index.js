"use strict";
function multiplicationTable(numbers) {
    return numbers.map((num, index) => Array.from({ length: 10 }, (_, i) => num * (i + 1)));
}
console.log(multiplicationTable([1, 5, 2]));
