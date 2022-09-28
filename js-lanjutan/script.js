//membuat object
//1 object literal
let mahasiswa = {
  nama: "asep",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
  },

  main: function (jam) {
    this.energi -= jam;
  },
};

//2. function declaration
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} selamat makan`;
  },

  main: function (jam) {
    this.energi -= jam;
    return `halo ${this.nama} selamat bermain`;
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    return this.energi;
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMhs); //menggunakan Object.create()
  // let mahasiswa = object.create(methodMhs);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  // mahasiswa.makan = methodMhs.makan;
  // mahasiswa.main = methodMhs.main;  menggunakan method dari object lain

  // mahasiswa.makan = function (porsi) {
  //   this.energi += porsi;
  // };

  // mahasiswa.main = function (jam) {
  //   this.energi -= jam;
  // };
  //yang di return adalah let mahasiswa yang ada dalam function declaration
  return mahasiswa;
}

const asheva = Mahasiswa("asep supriatna", 15);
const doddy = Mahasiswa("doddy hermawan", 20);

//3. constructor function

function Mhs(nama, energi) {
  // let mahasiswa = {};
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
  };

  this.main = function (jam) {
    this.energi -= jam;
  };
  //yang di return adalah let mahasiswa yang ada dalam function declaration
  // return mahasiswa;
}

const saipul = new Mhs("saipul jamil", 40);
const andre = new Mhs("andre taulani", 50);
const hani = new Mahasiswa("hanny", 13);

//menggunakan object.create()
