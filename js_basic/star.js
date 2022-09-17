var s = "";
var j = "";
// cetak bintang satu baris
// for (let i = 0; i < 5; i++) {
//   s += "*";
// }

// mencetak bintang 10 baris dan setiap barisnya terdiri dari 5 bintang
for (let i = 0; i < 10; i++) {
  for (let a = 0; a <= i; a++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

//mencetak segitiga
for (let i = 10; i > 0; i--) {
  for (let a = 0; a < i; a++) {
    j += "*";
  }
  j += "\n";
}
console.log(j);
