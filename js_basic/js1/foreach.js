//foreach digunakan untuk melakukan looping pada element array
let angka = [4, 2, 5, 8, 6, 16, 7, 18, 10, 20, 9];
let mhs = ["asep", "doni", "galih", "ferry"];
angka.forEach(function (e) {
  //e untuk element
  console.log(e);
}); //kita gunakan function expression

mhs.forEach(function (e, i) {
  console.log(`Mahasiswa ke-${i + 1}.${e.toUpperCase()}`);
});

//map bisa mengembalikan nilai array sedangkan  foreach tidak
let angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join("-"));

//sort berfungsi untuk mengurutkan element pada array
angka.sort(); //kalau seperti ini maka yang di cetak berdasarkan nilai pada huruf pertama
console.log(angka.join("-"));

//menggunakan function agar urutannya benar
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join("-"));

//filter berfungsi untuk memfilter element pada array dan dapat mengembalikan nilai lebih dari satu
//find hanya mengembalikan satu nilai

let angka3 = angka.filter(function (e) {
  return e < 10;
});

console.log(angka3.join("-"));

let angka4 = angka3.find(function (e) {
  return e > 2; //ini akan menampilkan no yang pertama kali ditemukan
});
console.log(angka4);
