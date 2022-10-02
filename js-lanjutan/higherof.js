const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka yang lebih besar dari 3
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] > 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// //contoh menggunakan filter
// for (let i = 0; i < angka.length; i++) {
//   angka.filter([i] > 3, []);
// }

const newAngka1 = angka.filter(function (a) {
  return a >= 3;
});

const newAngka2 = angka.filter((a) => a > 3);
console.log(newAngka1);
console.log(newAngka2);

//map yaitu memetakan tiap2 nilai pada array menjadi function
const newAngka3 = angka.map((a) => a * 2);

console.log(newAngka3);
