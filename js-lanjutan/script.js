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
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
  };

  mahasiswa.main = function (jam) {
    this.energi -= jam;
  };
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
