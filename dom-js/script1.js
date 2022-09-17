// const judul = document.getElementById("judul");
// judul.innerHTML = `Hello xcode<span>pro</span>`

const judul = document.querySelectorAll("h1")[0];
judul.setAttribute("name", "judul1");
judul.setAttribute("class", "xcodepro");

//untuk mengambil atribut dari sebuah element bisa menggunakan getAttribute
const a = document.querySelector("section#a a");
console.log(a.getAttribute("href"));

//untuk menambahkan class pada suatu element bisa menggunakan classlist
//classList berfungsi untuk mengelola class atau memanipulasi class
//tangkap element yang di tuju
const p2 = document.querySelector(".p2");

//method dalam classList
//dark mode
document.body.classList.toggle("dark");

p2.classList.add("biru-muda");
// p2.classList.remove("biru-muda");
// p2.classList.toggle("biru-muda");
// p2.classList.item(1)//untuk mengambil nilai pada class dengan index di mulai dari 0 dan mengembalikan nilai dari class tersebut
// p2.classList.contains("biru-muda")//untuk mencari tahu apakah ada class dengan nama biru-muda di element tersebut jika ada maka akan mengembalikan nilai true jika tidak ada maka akan mengembalikan nilai false

p2.classList.replace("biru-muda", "dark-light"); //untuk mengganti class
