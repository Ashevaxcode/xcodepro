let hari = ["senin", "selasa", "rabu", "kamis", "juma'at", "sabtu", "minggu"];
console.log(hari[4]);
console.log(`tipe dari array hari ${typeof hari}`); //cara cek tipe dari suatu varibel
console.log(`jumlah dari array hari adalah ${hari.length}`); //cara melihat jumlah index dalam array
console.log(
  `jumlah string dalam hari ${hari[6]} adalah ${hari[6].length} huruf `
);

//looping isi dari array
const myFunc = function (a) {
  return a * a + a;
};
let isi = ["asep", 32, true, hari, myFunc, [2, 3, 5, ["asheva", "xcode"]]];
for (let i = 0; i < isi.length; i++) {
  console.log(isi[i]);
  console.log(`tipe datanya adalah ${typeof isi[i]}`);
}

let hitung = isi[4](4); //mengakses function dalam array
console.log(hitung);
console.log(isi[3][3]); //array multi dimensi
