//tagged template
const nama = "ashevajess";
const umur = 35;
const email = "ashevaxcode@gmail.com";

// function coba(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
// const str = coba`Halo , Nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);
const container3 = document.querySelector(".container3");

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}
const str = highlight`Halo , Nama saya ${nama}, saya ${umur} tahun , email : ${email}`;
container3.innerHTML = `${str}<hr>`;
