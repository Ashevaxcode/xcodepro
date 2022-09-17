console.log("berhasil tersambung");

// definisi variabel
var angka = prompt("masukkan nilai ");

if (angka % 2 == 0) {
  console.log("bilangan Genap");
} else {
  console.log("bilangan ganjil");
}

//menampilkan tulisan sebanyak 10 kali menggunakan while
var nilai = 1;
while (nilai <= angka) {
  console.log(`Hello world ${nilai}x`); //penulisan string menggunakan back tick kita bisa langsung menyambungkan dengan variabel atau nilai tanpa harus keluar dari format string
  console.log("selamat datang asheva");
  nilai++;
}

//contoh while dan menggunakan kendali confirm
var ulang = true;
while (ulang) {
  console.log("ini adalah looping while");
  ulang = confirm("ulangi lagi ?");
}
