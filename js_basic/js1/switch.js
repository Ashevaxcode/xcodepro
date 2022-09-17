var angka = parseInt(prompt("masukkan angka :")); //parseInt adalah sebuah fungsi yang memaksa semua input dari prompt akan diubah menjadi integer

// if (angka === 1) {
//   // tanda === adalah operator pembandingan identitas maka yang akan dibandingkan adalah nilai dan tipe datanya juga kalau tanda == maka yang akan dibandingkan hanya nilai nya saja
//   alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else if (angka === 3) {
//   alert("anda memasukkan angka 3");
// } else {
//   alert("angka yang anda masukkan salah");
// }

switch (angka) {
  case 1:
    alert("anda memasukkan angka 1");
    break;
  case 2:
    alert("anda memasukkan angka 2");
    break;
  case 3:
    alert("anda memasukkan angka 3 ");
    break;
  default: {
    alert("angka yang anda masukkn salah:");
  }
}

var nilai = prompt("masukkan nilai mata kuliah : \n A,B,C,D");

switch (nilai) {
  case "A":
    alert("Sangat Baik");
    break;
  case "B":
    alert("Baik");
    break;
  case "C":
    alert("Cukup");
    break;
  case "D":
    alert("Kurang Baik");
    break;
  default:
    alert("nilai yang anda masukkan salah");
}
