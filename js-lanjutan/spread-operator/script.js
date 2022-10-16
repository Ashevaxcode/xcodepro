//spread operator memecah itterable menjadi
const mhs = ["asep", "sandhika", "erik", "doddy"];
console.log(...mhs[0]);
//bisa menggabungkan 2 atau lebih array
//bisa menggunakan concat tapi kurang flexibel
const dosen = ["galih", "ade", "wanda"];
// const orang = mhs.concat(dosen);
//menggunakan spread operator ...(titik3)
const orang = [...mhs, "ajis", ...dosen];
console.log(orang.length);
orang.forEach((m) => console.log(m));

//spread operator dapat mengcopy array
const asDosen = [...dosen];
asDosen.push("asheva");
asDosen.push("sandhika");
console.log(asDosen);
asDosen.shift();
console.log(dosen);
console.log(asDosen);

//ambil element li
const li = document.querySelectorAll("li");
const mahasiswa = [];
//for
for (let i = 0; i < li.length; i++) {
  mahasiswa.push(li[i].textContent);
}
//menggunakan map
const siswa = [...li].map((m) => m.textContent);
// console.log(siswa);
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);

//kemudian kita timpa text h1 dengan huruf
nama.innerHTML = huruf;
