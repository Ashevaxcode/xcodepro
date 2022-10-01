//menggunakan function expression
// const tampilNama = function (nama) {
//   return `Hallo ${nama}`;
// };

//menggunakan arrow function
const tampilNama = (nama) => {
  return `Hallo ${nama}`;
};

//kalau parameter lebih dari satu maka
const salam = (nama, waktu) => {
  return `selamat ${waktu} , ${nama}`;
};

//jika parameternya hanya satu dan hanya mengembalikan return maka
//bisa menggunakan implisit return
const tampilNama1 = (nama) => `hai ${nama}`;

console.log(tampilNama("xcodepro"));
console.log(salam("erik", "siang"));
console.log(tampilNama1("denis"));

//contoh penggunan array map pada arrow function
let mhs = ["asep supriatna", "muhammad nuryadi", "hehen nugraha", "irfan"];

// let hitungHuruf = mhs.map(function (nama) {
//   return nama.length;
// });

//jika menggunakan arrow function
let hitungHuruf = mhs.map((nama) => nama.length);

//kalau kita ingin mengembalikan nilai dalam bentuk object maka
let hitungHuruf2 = mhs.map((nama) => ({
  //kalau nilai properti sama dengan nilai parameter maka cukup menuliskan nama saja
  //   nama: nama,
  nama,
  jumlah_Huruf: nama.length,
}));

console.log(mhs);
console.log(hitungHuruf);
console.log(hitungHuruf2);
//kalau kita ingin menapilkan dalam bentuk tabel
console.table(hitungHuruf2);

//konsep this pada arrow function
//1. menggunakan constructor function
const Siswa = function () {
  this.nama = "asep";
  this.umur = 35;

  //   this.sayHelo = function () {
  //     return `Halo nama saya ${this.nama} , umur ${this.umur} tahun`;
  //   };
  this.sayHelo = () => {
    return `Halo nama saya ${this.nama} , umur ${this.umur} tahun`;
  };
};

let asep = new Siswa();

console.table(asep.sayHelo());

// menggunakan objek literal
const mhs1 = {
  nama: "asheva",
  umur: 35,
  sayHelo: () => {
    return `Halo nama saya ${this.nama} , umur ${this.umur} tahun`;
  },
};

const Siswa1 = function () {
  this.nama = "asep";
  this.umur = 35;

  //   this.sayHelo = function () {
  //     return `Halo nama saya ${this.nama} , umur ${this.umur} tahun`;
  //   };
  this.sayHelo = () => {
    return `Halo nama saya ${this.nama} , umur ${this.umur} tahun`;
  };

  //function ini akan menambahkan umur setiap 3 detik ini harus menggunakan arrow function
  setInterval(() => {
    console.log(this.umur++);
  }, 3000);
};

// let asep1 = new Siswa1();
