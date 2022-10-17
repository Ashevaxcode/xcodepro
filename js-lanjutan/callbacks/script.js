// callback synchronous
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukkan nama :");
//   callback(nama);
// }
// //bisa menggunakan anonymous fuction
// tampilkanPesan((nama) => alert(`halo ${nama}`));

//callback asynchronous
// const mhs = [
//   {
//     nama: "ashev",
//     nrp: "083450442",
//     email: "asheva@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "sandhika",
//     nrp: "083450425",
//     email: "sandhika@gmail.com",
//     jurusan: "teknik jaringan",
//     idDosenWali: 2,
//   },
//   {
//     nama: "erik",
//     nrp: "083320440",
//     email: "erik@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "doddy",
//     nrp: "083450507",
//     email: "doddy@gmail.com",
//     jurusan: "teknik grafis",
//     idDosenWali: 2,
//   },
// ];

// //tampilkan semua nama mahasiswa
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

//asychronous callback, ada 3 parameter
//url adalah tempat menyimpan data mahasiswa / bisa juga alamat API
//success adalah callback function apabila berhasil
//error adalah callback function apabila error
function getDataMahasiswa(url, success, error) {
  //membuat objek ajax
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  //panggil ajaxnya
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "./data/mahasiswa.json",
  (result) => {
    //console.log(result);//masih dalam bentuk teks untuk merubah jadi bentuk object maka harus menambahkan method json parse
    //console.log(JSON.parse(result));//menampilkan seluruh isi array of object
    //kalau ingin menampilkan hanya nama saja
    const mhs = JSON.parse(result); //membuat variabel baru yang isinya array of object
    mhs.forEach((m) => {
      console.log(m.nama);
    });
  },
  () => {}
);

console.log("selesai");

//mengunakan jquery
console.log("mulai");
// jquery
$.ajax({
  url: "./data/mahasiswa.json",

  success: (mhs) => {
    //menampilkan hanya nama saja menggunakan looping
    mhs.forEach((m) => {
      console.log(m.nama);
      console.log(`jurusan : ${m.jurusan}`);
    });
  },

  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
