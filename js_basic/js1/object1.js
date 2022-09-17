//membuat object menggunakan :
//1 object literals

let mhs = {
  nama: "asep supriatna",
  nrp: "03201010",
  jurusan: "teknik informatika",
  umur: 35,
};

let mhs1 = {
  nama: "nofariza",
  nrp: "032010023",
  jurusan: "teknik jaringan",
  umur: 32,
};

//2 function declaration
function tambahMhs(nama, nrp, jurusan, umur) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.jurusan = jurusan;
  mhs.umur = umur;
  return mhs;
}

let mhs3 = tambahMhs("dody satria", "03209389", "teknik visual", 29);
let mhs4 = tambahMhs("jian wibowo", "03110593", "teknik 3d grafis", 28);

//3 constructor function awal dari nama constructor menggunakan huruf besar
function Mahasiswa(nama, nrp, jurusan, umur) {
  this.nama = nama;
  this.nrp = nrp;
  this.jurusan = jurusan;
  this.umur = umur;
}

//untuk memanggil constructor function kita harus menggunakan keyword new
let mhs5 = new Mahasiswa("erick", "030100976", "teknik audio", 27);
let mhs6 = new Mahasiswa("joko", "031100854", "teknik informatika", 28);
