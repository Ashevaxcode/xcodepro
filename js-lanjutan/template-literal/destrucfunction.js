//destructuring function
function penjumlahanPerkalian(a, b) {
  return [a + b, a - b, a * b, a / b];
}

//contoh tanpa menggunakan destructuring
console.log(penjumlahanPerkalian(2, 3));
const jumlahkan = penjumlahanPerkalian(2, 3)[0];
const kalikan = penjumlahanPerkalian(2, 3)[1];
console.log(jumlahkan + kalikan);

//menggunakan destructuring return value
const [penjumlahan, pengurangan, perkalian, pembagian] = penjumlahanPerkalian(
  3,
  5
);
console.log(penjumlahan);
console.log(pembagian);
//agar lebih flexibel maka kita dapat mengembalikan nilai function dalam bentuk object kalau contoh di atas mengembalikan nilai dalam bentuk array

function kalkulasi(a, b) {
  return {
    jumlah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}
//destructuring return value
//masukkan kedalam object destructuring variabel
const { kurang, jumlah, bagi, kali } = kalkulasi(2, 3);
console.log(kurang);
console.log(kali);

//destructuring function arguments
const mhs1 = {
  nama: "sandhika galih",
  umur: 33,
  email: "sandhika@gmail.com",
};

function cetakMhs(nama, umur) {
  return `Hallo, saya ${nama} , saya ${umur} tahun`;
}

//menggunakan cara biasa
console.log(cetakMhs(mhs1.nama, mhs1.umur));
//atau kita kirim object sebagai parameter
const mhs2 = {
  nama: "doddy darmawan",
  umur: 30,
  email: "doddy@gmail.com",
};

function cetakMhs1(mhs) {
  return `Hallo, saya ${mhs.nama} , saya ${mhs.umur} tahun`;
}
console.log(cetakMhs1(mhs2));

//atau kita bisa langsung destruct objectnya di parameter
//dan bisa untuk objek yang lebih kompleks
const mhs3 = {
  nama: "erik simajuntak",
  umur: 29,
  email: "erik@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

function cetakMhs2({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Hallo, saya ${nama} , saya ${umur} tahun ,dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs2(mhs3));
