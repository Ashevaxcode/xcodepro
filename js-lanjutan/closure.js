function init() {
  //   let nama = "ashevajess";
  function tampilNama(nama /* menambahkan parameter*/) {
    console.log(nama);
  }

  return tampilNama;
}

let panggilNama = init();
panggilNama("sandhika");
panggilNama("xcodepro");

//maka kita bisa menggunakan function ini sebagai function factory
//membuat function fatories
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`hallo ${nama} selamat ${waktu} ,semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatSore = ucapkanSalam("sore");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("herry");
selamatSiang("sandhika");
selamatMalam("erik");

//contoh penggunaan closure
//penggunaan function biasa
let counter = 0;
function add() {
  return ++counter;
}
counter = 100; // kalau kita set counter 100 makan function add akan menggunakan nilai yang baru dibuat
console.log(add());
console.log(add());
console.log(add());
console.log(add());
//makan akan tampil 101,102,103,104

//menggunakan closure
function tambah() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

console.log(tambah()); //function baru di eksekusi sebagian maka yang di tampilkan isi functionnya saja
//untuk menjalan kan function tambah maka kita harus memasukkan dulu kedalam variabel baru
let hitung = tambah();
console.log(hitung());
console.log(hitung());
console.log(hitung());
console.log(hitung());

//agar pemanggilan function bisa dilakukan secara langsung tidak menggunakan variabel lain
// maka function kita bungkus menjadi immediately invoke function
//contoh immediately invoke function
let add2 = (function () {
  let counter = 10;
  return function () {
    return `This is immediately invoke function ${++counter}`;
  };
})();

console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());
