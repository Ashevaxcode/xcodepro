//spread operator memecah itterable menjadi
const mhs = ["asep", "sandhika", "erik", "doddy"];
console.log(...mhs[0]);
//bisa menggabungkan 2 atau lebih array
//bisa menggunakan concat tapi kurang flexibel
const dosen = ["galih", "ade", "wanda"];
// const orang = mhs.concat(dosen);
//menggunakan spread operator ...(titik3)
const orang = [...mhs, "ajis", ...dosen];
console.log(...orang);
