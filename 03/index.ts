type NumberArray = number[];

function genereteMultiplicationTable(numbers: NumberArray): NumberArray[] {
  return numbers.map((num, index) =>
    Array.from({ length: 10 }, (_, i) => num * (i + 1))
  );
}

console.log(genereteMultiplicationTable([1, 5, 2]));
