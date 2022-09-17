//dom selection
//document.getElementById()

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Hello Asheva  ";

//document.getElementsByTagName()
//mengembalikan HTMLcollection
const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightBlue";
// p[1].style.backgroundColor = "lime";
// p[3].style.backgroundColor = "lightBlue";
// p[0].style.backgroundColor = "lightBlue";

//menggunakan looping
for (let i = 0; i < p.length; i++) {
  if (i % 2 == 1 /*ganjl*/) {
    p[i].style.backgroundColor = "lightblue";
  } else {
    p[i].style.backgroundColor = "lime";
  }
}

//menyeleksi sebuah element menggunakan getElementsByTagName
//maka akan menghasilkan htmlcollection
// misalkan kita akan menyeleksi h1 karena h1 hanya boleh ada satu dalam sebuah halaman
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "40px";
h1.innerHTML = "Asheva Xcode";

//getElementsByClassName()
//HTMLCollection
let user = "XcodePro";
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = `ini dirubah melalui javascript oleh ${user}`;
