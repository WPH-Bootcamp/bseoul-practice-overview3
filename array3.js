const arr = [1, 2, 3, 4, 5, 6]; // panjang data nya 6

// expect data nya: [6,5,4,3,2,1]

console.log(arr.reverse()) // built in function javascript (otomatis)

let reversed = [];

// parameter pertama = 5
// looping: 5
// looping: 4
// looping: 3
// looping: 2
// looping: 1
// looping: 0

// 5 - 1
// 4 - 1
// 3 - 1
// 2 - 1
// 1 - 1
// 0 - 0 => -1

for (let i = arr.length - 1; i >= 0; i--) {
  // arr[5] =>  6
  // arr[4] =>  5
  // arr[3] =>  4
  // arr[2] =>  3
  // arr[1] =>  2
  // arr[0] =>  1
  reversed.push(arr[i]);
}

console.log(reversed);
