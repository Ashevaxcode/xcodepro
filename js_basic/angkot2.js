var jumlahAngkot = 10,
  noAngkot = 1;

// while
// while (noAngkot <= jumlahAngkot) {
//   console.log("Angkot no." + noAngkot + " Sedang Beroperasi Dengan baik");
//   noAngkot++;
// }

//for
var pilih = prompt("pilih contoh 1 atau 2 ");
if (pilih == 1) {
  console.log("contoh 1:");
  for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
      console.log("Angkot no." + noAngkot + " Sedang Beroperasi Dengan Baik");
    } else {
      console.log("Angkot no." + noAngkot + " Sedang Rusak");
    }
  }
} else if (pilih == 2) {
  console.log("contoh 2:");
  for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
      console.log("Angkot no." + noAngkot + " Sedang Beroperasi Dengan Baik");
    } else if (noAngkot == 8 || noAngkot == 10) {
      console.log("Angkot no." + noAngkot + " Sedang Lembur");
    } else {
      console.log("Angkot no." + noAngkot + " Sedang Rusak");
    }
  }
} else {
  alert("pilihan anda salah");
}
