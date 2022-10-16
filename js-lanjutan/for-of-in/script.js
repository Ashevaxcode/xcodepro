//looping menggunakan for..of
const mhs = ["sandhika", "hendrik", "erik", "doddy"];

//looping for biasa
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

const mhs2 = ["asheva", "nuryadi", "hehen", "wine"];
//looping foreach
mhs2.forEach((m) => console.log(m));

// let nama = prompt("siapa nama anda");
// function cetakNama(nama) {
//   console.log(`hallo nama saya ${nama}`);
// }
// cetakNama(nama);

//looping menggunakan for of
const mhs3 = ["daniel", "hanny", "jannice"];
for (const m of mhs3) {
  console.log(m);
}

//looping element beserta indexnya
for (let i = 0; i < mhs.length; i++) {
  console.log(`${mhs[i]} adalah mahasiswa ke-${i + 1}`);
}

//foreach parameter yang pertama m adalah isi dari index , parameter ke dua i adalah indexnya
mhs2.forEach((m, i) => {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
});

//forof karena di dalam for of hanya bisa menerima satu parameter maka kita bisa memodifikasi code nya
//maka kita bisa menambahkan sebuah method yaitu entries yang langsung kita destructuring ke dalam array
for (const [i, m] of mhs3.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

//kita bisa meloping string menggunakan forof
let nama = "sandhika";
for (const n of nama) {
  console.log(n);
}

mhs2.forEach((m) => {
  console.log(m);
  for (const n of m) {
    console.log(n);
  }
});

//looping nodelist
const liNama = document.querySelectorAll(".nama");
//foreach loopinng isi nodelist
liNama.forEach((n) => console.log(n.innerHTML));
//forof
for (const n of liNama) {
  console.log(n.innerText);
}

//looping arguments, karena argument bukan merupakan array maka kita tidak bisa melooping menggunakan foreach
//misalkan kita ingin menjumlahkan argument yang dikirim ke parameter
function jumlahkanAngka() {
  //   return arguments.reduce((a, i) => a + i);
  //maka kita bisa menggunaka forof
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }

  return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5, 6));

//forin di gunakan untuk looping properties pada object /looping enumerable object
let siswa = {
  nama: "asheva xcode",
  umur: 35,
  email: "ashevaxcode@gmail.com",
};

for (const m in siswa) {
  console.log(`${m} : ${siswa[m]}`);
}
