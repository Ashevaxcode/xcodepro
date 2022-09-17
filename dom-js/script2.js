//manipulasi node
//buat element html
const pBaru = document.createElement("p");

//buat teks yang akan di masukkan kedalam element baru
const teksP = document.createTextNode("Ini adalah paragraf baru");

//masukkan teks kedalam element
pBaru.appendChild(teksP);

//simpan kedalam document html
//ambil class atau id dari element yang di tuju
//simpan pbaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//buat element li baru
const liBaru = document.createElement("li");

//buat teks
const teksLi = document.createTextNode("item baru");

liBaru.appendChild(teksLi);

//tangkap parent node yaitu ul
const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");//menggunakan psuedo class css dari li
const li = ul.querySelectorAll("li");

// ul.insertBefore(liBaru, li2);
ul.insertBefore(liBaru, li[2]);
// ul.appendChild(liBaru);

// ul.removeChild(li[0]);
//remove child
// const link = document.getElementsByTagName("a")[0];
const link = document.querySelector("a");
const p = document.querySelectorAll("section#a p");
sectionA.removeChild(link);
sectionA.removeChild(p[1]);
sectionA.removeChild(p[2]);

//membuat ul baru dan li dan looping
const ulBaru = document.createElement("ul");
// let liNew; //= document.createElement("li");
// let teksNew; //= document.createTextNode("element item baru");
let item = ["handphone", "smartphone", "ipad", "laptop", "pc", "console"];
for (let i = 0; i < item.length; i++) {
  liNew = document.createElement(`li`);
  teksNew = document.createTextNode(`${item[i]}`);
  liNew.appendChild(teksNew);
  ulBaru.appendChild(liNew);
  //   return liNew;
}

sectionA.appendChild(ulBaru);

//parentnode.replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const h2Baru = document.createElement("h2");
const th2 = document.createTextNode("judul baru !");
h2Baru.appendChild(th2);

sectionB.replaceChild(h2Baru, p4);

//untuk menandai element yang telah di ubah melalui java script
pBaru.style.backgroundColor = "lime";
ulBaru.style.backgroundColor = "lime";
h2Baru.style.backgroundColor = "lime";
liBaru.style.backgroundColor = "lime";
