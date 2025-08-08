let numbers = [12, 31, 3, 5, 7, 20, 23];

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  // numbers[0] % 2 ===> 12 / 2 = 6 | hasil bagi = 0
  // numbers[1] % 2 ===> 31 / 2 = 15 | hasil bagi = 1
  // numbers[2] % 2 ====> 3 / 2 = 1 | hasil bagi = 1
  // numbers[3] % 2 ====> 5 / 2 = 2 | hasil bagi = 1
  // numbers[4] % 2 ===> 7 / 2 = 3 | hasil bagi = 1
  console.log(numbers[i] % 2);
  if (numbers[i] % 2 != 0) {
    count++; // increment
  }
}

console.log(`hasil nilai ganjil ${count}`)
