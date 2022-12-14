const box = document.querySelector(".box");
const btn = document.getElementById("btn-animasi");

btn.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (box.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  //   box.classList.toggle(satu);

  setInterval(() => {
    box.classList.toggle(satu);
  }, 2000);

  setInterval(() => {
    box.classList.toggle(dua);
  }, 3000);
});

//menggunakan settimeout
box.addEventListener("click", function () {
  //agar animasi untuk kembalinya berurutan maka kita mengakali
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

//mengubah size huruf
const logo = document.querySelector(".logo");
const change = document.getElementById("change");

logo.addEventListener("click", function () {
  // let a = 12;
  for (let i = 8; i < 30; i++) {
    setInterval(() => {
      change.style.fontSize = `${i++}px`;
    }, 50);
  }
});
