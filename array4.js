// array 2d
let matrix = [
  [1, 2, 3], // index ke 0
  [4, 5, 6, 10], // index ke 1
];

let total = 0;
// penjumlahan angka (menggunakan nested looping)
for (let i = 0; i < matrix.length; i++) {
  console.log("looping di luar: ", i);
  for (let j = 0; j < matrix[i].length; j++) {
    [1, 2, 3][(4, 5, 6, 10)]; // 3 data berarti 3 kali perulangan // 4 data berarti 4 kali perulangan
    console.log("looping di dalam: ", j);
    total += matrix[i][j];

    // 3 kali perulangan
    // total += matrix[0][0]
    // total += matrix[0][1]
    // total += matrix[0][2]

    // 4 kali perulangan
    // total += matrix[1][0]
    // total += matrix[1][1]
    // total += matrix[1][2]
    // total += matrix[1][3]
  }
}

console.log("totalnya adalah: ", total);
