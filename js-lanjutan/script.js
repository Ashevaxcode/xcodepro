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
    mahasiswa.energi += porsi;
  };

  return Mahasiswa;
}
