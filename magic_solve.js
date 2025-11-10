var numbers = [
  0, 13, 10, 0, 0, 0, 1, 17, 0, 0, 18, 0, 14, 6, 2, 0, 0, 3, 20, 24, 0, 0, 0,
  12, 0,
];

var missing = [4, 5, 7, 8, 9, 11, 15, 16, 19, 21, 22, 23, 25];

var sum = 0;
for (let m = 0; m < 2000; m++) {
  sum = 0;
  var missing = [4, 5, 7, 8, 9, 11, 15, 16, 19, 21, 22, 23, 25];
  var numbers = [
    0, 13, 10, 0, 0, 0, 1, 17, 0, 0, 18, 0, 14, 6, 2, 0, 0, 3, 20, 24, 0, 0, 0,
    12, 0,
  ];

  for (let i = 0; i < 25; i++) {
    const k = Math.floor(Math.random() * missing.length);
    if (numbers[i] === 0) {
      numbers[i] = missing[k];
      missing.splice(k, 1);
    }
  }

  const target1 =
    numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
  const target2 =
    numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  if (target1 === 65 && target2 === 65) {
    console.log(numbers, "f");
  }
}
console.log(numbers, "for");
