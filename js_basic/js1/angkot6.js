// //pengelolaan penumpang
// var penumpang = [];
// function tambahPenumpang(nama, penumpang) {
//   if (penumpang[0] == true) {
//     penumpang.push(nama);
//   } else {
//     console.log("penuh");
//   }

//   return penumpang;
// }

var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong // cek menggunakan length
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array da keluar dari function
    console.log(`${namaPenumpang} sudah naik`);
    return penumpang;
  } else {
    // else
    //telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika aad kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        console.log(`${namaPenumpang} sudah naik`);
        //kembalikan isi array & keluar dari function
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika sudah ada nama  yang sama
        console.log(`${namaPenumpang} Sudah ada di dalam angkot`);
        //tampilkan pesan kesalahannya
        return penumpang;
        //kembalikan isi array & keluar dari function
      } else if (i == penumpang.length - 1) {
        //jika seluruh kursi terisi
        penumpang.push(namaPenumpang);
        console.log(`${namaPenumpang} sudah naik`);
        //tamabah penumpang di akhir array
        return penumpang;
        //kembalikan isi array & keluar dari function
      }
    }
  }
};

//hapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  //tampilkan pesan kesalahan jika angkot masih kosong
  if (penumpang.length == 0) {
    console.log("angkot masih kosong");
    return penumpang;
  }
  //jika ada nama yang sesuai
  else {
    for (let i = 0; i <= penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        console.log(`${namaPenumpang} sudah turun`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di dalam angkot`);
        return penumpang;
      }
    }
  }
};
