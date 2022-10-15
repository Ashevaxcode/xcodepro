//destructuring variabel
const angka = [1, 4, 20, 30, 21, 12, 7, 9, 8, 6];
const [a, ...values] = angka;

console.log(values);

//destructuring object
// const mhs = {
//   nama: "asep supriatna",
//   umur: 35,
//   jurusan: "teknik informatika",
//   alamat: { jalan: "jl merdeka no 27", kota: "jakarta", prov: "dki jakarta" },
//   cek: function () {
//     console.log(this);
//   },
// };

// const { nama, umur, cek } = mhs;
// cek();

//assignment tanpa deklarasi object

({ nama, umur, cek } = {
  nama: "asep supriatna",
  umur: 35,
  jurusan: "teknik informatika",
  alamat: { jalan: "jl merdeka no 27", kota: "jakarta", prov: "dki jakarta" },
  cek: function () {
    console.log(this);
  },
});
console.log(nama);

//assignment ke variabel baru + memberi nilai default

const mhs = {
  namaMhs: "ashevaxcode",
  umurMhs: 35,
  jurusanMhs: "teknik informatika",
  email: "ashevaxcode@gmail.com",
};
//memberi nilai default pada email
const { namaMhs: nM, umurMhs: uM, email = "email@default.com" } = mhs;
console.log(email);

//mengambil salah satu field pada objek, setelah dikirimkan ke parameter melalui function
const mahasiswa = {
  id: 123,
  namaMhs: "ashevaxcode",
  umurMhs: 35,
  jurusanMhs: "teknik informatika",
  email: "ashevaxcode@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mahasiswa));
