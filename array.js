// study case
let penilaian = [
  { nama: "Taufik", nilai: 80 }, // 0
  { nama: "Dummy 1", nilai: 70 }, // 1
  { nama: "Dummy 2", nilai: 85 }, // 2
  { nama: "Dummy 3", nilai: 85 }, // 3
];

// array nama
const nama = [
  { nama: "Taufik", email: "taufik@gmail.com", umur: 22 },
  { nama: "Handi", email: "handi@gmail.com" },
];

nama[0].nama = "testing";

// kita ingin menampilkan sebuah nilai di atas 80
const score = penilaian.filter((score) => score.nilai > 80);

// filtering nama
const filterNama = penilaian.filter((score) => score.nama == "Taufik");

// LET
let angka = [1, 2, 3];
angka[0] = 5; // bisa
angka.push(10); // bisa
angka = [4, 5, 6]; // bisa

// CONST
const angkaCons = [1, 2, 3];
angkaCons[0] = 5; // bisa
angkaCons.push(10); // bisa
angkaCons.pop(); // menghapus nilai 10
angkaCons.pop(); // menghapus nilai 3

// angkaCons = [4, 5, 6]; // tidak bisa

// study case angka
let arrayNumber = [10, 26, 5, 32, 36, 54]; // 6 data

// 1. looping (for, while, do while)
// 2. IF

// mau mencari nilai terendah
let min = arrayNumber[0]; // sebagai pembanding
let nilaiTerendah;
for (let i = 1; i < arrayNumber.length; i++) {
  // arrayNumber[1] < 10 ====> 26 < 10 ? false ==> looping pertama
  // arrayNumber[2] < 10 =====> 5 < 10 ? true ==> looping kedua
  // arrayNumber[3] < 10 =====> 32 < 10 ? false ==> looping ketiga
  // arrayNumber[4] < 10 =====> 36 < 10 ? false ==> looping keempat
  // arrayNumber[5] < 10 ======> 54 < 10 ? false ===> looping kelima

  if (arrayNumber[i] < min) {
    // pembanding
    nilaiTerendah = arrayNumber[i];
    return;
  }
}

// berupaAngka
let numbers = [12, 31, 3, 5, 7, 20, 23];

// hitunglah angka ganjil, ada berapa di variabel numbers
console.log(123);

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log("test");
  console.log(number[i] % 2);
  if (numbers[i] % 2 != 0) {
    count++; // increment
  }
}
