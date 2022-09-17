//event pada dom
//event handler
//1.menggunakan inline html atribute di file html
//2.menggunakan method pada javascript
// const p3 = document.querySelector(".p3");
// p3.style.backgroundColor = "lightblue";
const p2 = document.querySelector(".p2");
//menggunakan function
function ubahWarna() {
  p2.style.backgroundColor = "lightblue";
}

// p2.onclick = ubahWarna;

//coba menggunakan looping
//tangkap element p
const p = document.querySelectorAll("section#a p");
for (let i = 0; i < p.length; i++) {
  let ubahWarnaBaru = function () {
    p[i].style.backgroundColor = "red";
  };
  p[i].onclick = ubahWarnaBaru;
}

//addEventListener()
//tangkap element p4
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const li = document.createElement("li");
  const tLi = document.createTextNode("item baru ditambahkan");
  li.append(tLi);
  const ul = document.querySelector("section#b ul");
  ul.append(li);

  let i = 0;
  let liItem = document.querySelectorAll("section#b ul li");
  for (i; i < liItem.length; i++) {
    // return liItem;
    // return i;
  }
  p4.innerHTML = "berhasil tambah item";
  console.log(`item bertambah ${i - 3} menjadi ${liItem.length}`);
});

//menggunakan event handler jika ada 2 method yang sama maka method baru akan menimpa method yang pertama
//jika menggunakan addEventListener maka method tersebut dua-duanya akan dijalankan
//misalkan
// const p3 = document.getElementById("p3");
p4.addEventListener("click", function () {
  p4.style.backgroundColor = "grey";
});
p4.addEventListener("click", function () {
  p4.style.color = "yellow";
});

p4.addEventListener("mouseenter", function () {
  p4.style.backgroundColor = "salmon";
  p4.style.cursor = "pointer";
});
p4.addEventListener("mouseleave", function () {
  p4.style.backgroundColor = "white";
  p4.style.color = "#333";
  p4.innerHTML = "paragraf 4";
});
