var noAngkot = 1;
var angkotBeroperasi = 5;

var jumlahAngkot = 10;
var lembur = [7, 10];
// while (noAngkot <= jumlahAngkot) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log(`Angkot No.${noAngkot} Sedang Beroperasi Dengan Baik`);
//   } else {
//     console.log(`Angkot No.${noAngkot} Tidak beroperasi`);
//   }
//   noAngkot++;
// }

//

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No.${noAngkot} Sedang Beroperasi`);
  } else if (noAngkot === lembur[0] || noAngkot === lembur[1]) {
    console.log(`angkot no ${noAngkot} sedang lembur`);
  } else {
    console.log(`Angkot No.${noAngkot} Sedang tidak Beroperasi`);
  }
}
// //pengulangan menggunakan for
// //pengelolaan ojek
// var noMotor = 1;
// var jmlMotor = 10;

// for (noMotor; noMotor <= jmlMotor; noMotor++) {
//   console.log(`Ojek No. ${noMotor} Beroperasi Dengan Baik`);
// }

// // //for menggunakan inline variable
// var grabBeroperasi = 8;
// var jmlGrab = 10;
// for (var noGrab = 1; noGrab <= jmlGrab; noGrab++) {
//   if (noGrab <= grabBeroperasi) {
//     console.log(`Grab No. ${noGrab} Beroperasi Dengan Baik`);
//   } else {
//     console.log(`Grab No. ${noGrab} Tidak beroperasi`);
//   }
// }
