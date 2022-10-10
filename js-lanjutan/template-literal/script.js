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
];

const el = `<div class="lagu">
    ${lagu
      .map(
        (l) => `<ul>
        <li>penyanyi : ${l.penyanyi}</li>
        <li>judul lagu : ${l.judul} ${l.feat ? `(feat : ${l.feat})` : " "}</li>
    </ul>`
      )
      .join("")}
</div>`;

const menu = ["home", "contact", "product", "portofolio"];
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

document.body.innerHTML = elMenu;
