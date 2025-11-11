var numbers = [
  0, 13, 10, 0, 0, 0, 1, 17, 0, 0, 18, 25, 14, 6, 2,11, 7, 3, 20, 24, 0, 19, 21,
  12, 0,
];

var missing = [4, 5, 8, 9, 11, 15, 16, 22, 23, 25];

var sum = 0;
for (let d = 0; d < 2000; d++) {
  for (let m = 0; m < 2000; m++) {
    sum = 0;
var missing = [4, 5, 8, 9, 11, 15, 16, 22, 23, 25];
var numbers = [
  0, 13, 10, 0, 0, 0, 1, 17, 0, 0, 18, 25, 14, 6, 2,11, 7, 3, 20, 24, 0, 19, 21,
  12, 0,
];

    for (let i = 0; i < 26; i++) {
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
    const target3 =
      numbers[10] + numbers[11] + numbers[12] + numbers[13] + numbers[14];
    const target4 =
      numbers[15] + numbers[16] + numbers[17] + numbers[18] + numbers[19];
    const target5 =
      numbers[20] + numbers[21] + numbers[22] + numbers[23] + numbers[24];

    const col1 =
      numbers[0] + numbers[5] + numbers[10] + numbers[15] + numbers[20];
    const col2 =
      numbers[1] + numbers[6] + numbers[11] + numbers[16] + numbers[21];
    const col3 =
      numbers[2] + numbers[7] + numbers[12] + numbers[17] + numbers[22];
    const col4 =
      numbers[3] + numbers[8] + numbers[13] + numbers[18] + numbers[23];
    const col5 =
      numbers[4] + numbers[9] + numbers[14] + numbers[19] + numbers[24];

    const diag1 =
      numbers[0] + numbers[6] + numbers[12] + numbers[18] + numbers[24]; // ↘
    const diag2 =
      numbers[4] + numbers[8] + numbers[12] + numbers[16] + numbers[20];

    if (
      target1 === 65 &&
      target2 === 65 &&
      target3 === 65 &&
      target4 === 65 &&
      target5 === 65 &&
      col1 === 65 &&
      col2 === 65 &&
      col3 === 65 &&
      col4 === 65 &&
      col5 === 65 &&
      diag1 === 65 &&
      diag2 === 65
    ) {
      console.log(numbers, "f");
      break;
    }
  }
}
console.log(numbers, "for");
