// arrow function
const sum = (a, b) => {
  return a + b; // return
};

// function declaration
function greetings(nama, message) {
  console.log(`Halo, ${nama}. ${message}`);
}

// console.log(sum(5, 3)); // console.log
// greetings("Taufik", "Apa kabar?");

function hitungVokal(string) {
  let vokal = "aiueo";
  let count = 0;
  let lower = string.toLowerCase(); // konversi huruf menjadi, huruf kecil.
  for (let i = 0; i < lower.length; i++) {
    // noted: -1 yang ga masuk
    // lower[0] ==> t => ga masuk ke kategori vokal = false.. (-1)
    // lower[1] ==> a => masuk, karena termasuk vokal
    // lower[2] ==> u => masuk, karena termasuk vokal
    // lower[3] ==> f => ga masuk ke kategori vokal = false.. (-1)
    // lower[4] ==> i => masuk, karena termasuk vokal
    // lower[5] ==> k => ga masuk ke kategori vokal = false.. (-1)

    if (vokal.indexOf(lower[i]) != -1) {
      count++;
    }
  }
  return count;
}

console.log(hitungVokal("Taufik"));
console.log(hitungVokal("javascript"));
