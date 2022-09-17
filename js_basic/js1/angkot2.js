var noAngkot = 1;
var angkotBeroperasi = 7;
var jumlahAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No.${noAngkot} Sedang Beroperasi Dengan Baik`);
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log(`Angkot No.${noAngkot} Sedang Tidak Beroperasi`);
}
// //pengulangan menggunakan for
// //pengelolaan ojek
// var noMotor = 1;
// var jmlMotor = 10;

// for (noMotor; noMotor <= jmlMotor; noMotor++) {
//   console.log(`Ojek No. ${noMotor} Beroperasi Dengan Baik`);
// }

// //for menggunakan inline variable
// for (let noGrab = 1; noGrab <= 10; noGrab++) {
//   console.log(`Grab No. ${noGrab} Beroperasi Dengan Baik`);
// }
