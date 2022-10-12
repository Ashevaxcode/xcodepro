//misalkan kita memiliki objek
// const mhs = {
//   nama: "asep supriatna",
//   npm: "0893121238",
//   jurusan: "teknik informatika",
// };

// const el = `<div class="mhs">
//     <h3 class="nama">${mhs.nama}</h3>
//     <span class="npm">${mhs.npm}</span>
// </div>`;

//menggunakan array of object
// const mhs = [
//   {
//     nama: "asep supriatna",
//     jurusan: "teknik informatika",
//   },
//   {
//     nama: "angga pratama",
//     jurusan: "desain grafis",
//   },
//   {
//     nama: "arif",
//     jurusan: "teknik RPL",
//   },
//   {
//     nama: "erik",
//     jurusan: "teknik jaringan",
//   },
// ];
// //looping pada html fragments
// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul class="">
//     <li>${m.nama}</li>
//     <li>${m.jurusan}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

//3.penggunaan conditional
//menggunakan ternary operator
const lagu = [
  {
    penyanyi: "arilaso",
    judul: "dealova",
    feat: "dewa19",
  },
  {
    penyanyi: "stinky",
    judul: "mungkinkah",
    // feat: "dewa19",
  },
  {
    penyanyi: "ada band",
    judul: "samudera",
    // feat: "dewa19",
  },
  {
    penyanyi: "Raisha",
    judul: "cinta sejati",
    feat: "afgan",
  },
];
//contoh penggkondisian dalam template literals
//html fragments
const el = `<div class="lagu">
    <h2>Judul Lagu</h2>
    ${lagu
      .map(
        (l) => `<ul>
        <li>penyanyi : ${l.penyanyi}</li>
        <li>judul lagu : ${l.judul} ${l.feat ? `(feat : ${l.feat})` : " "}</li>
    </ul>`
      )
      .join("")}
</div><hr>`;

//membuat menu

const menu = ["home", "contact", "product", "portofolio", "sign up"];
const elMenu = `<div class="menu">
    <ul>
      ${menu
        .map(
          (e) => `
        <li><a href="${e}">${e}</a></li>
      `
        )
        .join("")}
    </ul>
        
</div>`;

const nav = document.getElementsByTagName("nav");
nav[0].innerHTML = elMenu;

//membuat isi
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

const Mahasiswa = {
  nama: "asep supriatna",
  jurusan: "teknik informatika",
  umur: 35,
  matakuliah: [
    "rekayasa perangkat lunak",
    "pemrogramman database",
    "web development",
    "mobile development programming",
  ],
};
//panggil cetak matakuliah menggunakan function
function cetakMatakuliah(matakuliah) {
  return `<ol>
    ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const content = `<h2>Nama : ${Mahasiswa.nama}</h2>
<span class="umur">Umur : ${Mahasiswa.umur} tahun</span><br>
<span class="jurusan">Jurusan : ${Mahasiswa.jurusan}</span><hr>
<h3>Matakuliah :</h3>
${cetakMatakuliah(Mahasiswa.matakuliah).toUpperCase()}<hr>`;
//memanggil function dari luar
// <ol>
//   ${Mahasiswa.matakuliah
//     .map((m) => `<li>${m}</li>`)
//     .join("")
//     .toUpperCase()}
// </ol>

// masukkan kedalam container
container.innerHTML = content;
container2.innerHTML = el;
//footer
const footer = document.querySelector("footer");
const footText = `<span class="footer">Copyright&copy ${
  Mahasiswa.nama
} , ${Date()}</span>`;
//
footer.innerHTML = footText;
