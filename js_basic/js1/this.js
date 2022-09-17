// membuat object

// 1. menggunakan funcion declaration
console.log("1 object menggunakan function declaration dan konsep this ");
console.log("this mengembalikan object global atau window ");
function halo() {
  let mhs = {};
  console.log(this);
  console.log("halo");
}
this.halo();
// this dalam function declration mengembalikan object global

// halo.sapa = function () {
//   console.log("selmat datang");
// };
// halo();
// halo.sapa();

//2. menggunakan object literal
console.log(`2 object menggunakan object literal
this mengembalikan object yang bersangkutan`);
let mhs = { a: 10, nama: "asheva" };
mhs.halo = function () {
  console.log(this);
  console.log("halo");
};
mhs.halo();

// // 3. menggunakan constructor function
console.log(`3 menggunakan constructor function
this nya mengembalikan object yang baru dibuat`);
function Halo(nama, jurusan) {
  // console.log(this.nama);
  // console.log(this.jurusan);
  console.log(this);
  console.log("halo asheva");
}

let mahasiswa = new Halo("asep", "teknik komputer");
// mengembalikan object yang baru dibuat
