//manipulasi array

// //1.menambah isi array
// var arr = [];
// // console.log(arr);
// arr[0] = "asheva";
// arr[1] = "xcode";
// arr[2] = "supriatna";
// console.log(arr);

//2 menghapus isi array
let arr = ["asep", "xcode", "supriatna"];
console.log(arr);
arr[1] = undefined;
console.log(arr);

//3. menampilkan isi array
//menggunakan looping
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let mhs = ["asep", "supriatna", "deny", "fatah"];
for (let i = 0; i < mhs.length; i++) {
  let nama = mhs[i];

  console.log(`Mahasiswa ke-${i + 1}. ${nama.toUpperCase()}`);
}

//method pada array
//1. join menggabungkan element pada array dan merubahnya menjadi string
console.log(mhs.join("-").toUpperCase());

//2. push berfungi untuk menambah element di akhir isi array(element terakhir)
mhs.push("jenifer");
console.log(mhs.join("-").toUpperCase());

//3. pop berfungsi untuk menghapus element di akhir array
mhs.pop();
mhs.pop();
console.log(mhs.join("-").toUpperCase());
mhs.push("hari", "brian", "bagus", "melisa", "alisha");
console.log(mhs.join("-").toUpperCase());

//menampikan isi array yang sudah di manipulasi
for (let i = 0; i < mhs.length; i++) {
  let nama = mhs[i];

  console.log(`Mahasiswa ke-${i + 1}. ${nama.toUpperCase()}`);
}

//4. unshift berfungsi untuk menambahkan element pada di awal index
mhs.unshift("delia", "gerry");
console.log(mhs.join("-").toUpperCase());

//5. shift berfungsi untuk menghilangkan element di awal index
mhs.shift();
console.log(mhs.join("-").toUpperCase());

//6.splice berfungsi untuk menambahkan atau menyisipkan element di tengah
//splice(indexAwalnya, ada yg mau di hapus?, elemenBaru1, elemenbaru2,..)
mhs.splice(2, 3, "dewi", "ratna");
console.log(mhs.join("-").toUpperCase());

//7 slice berfungsi untuk mengiris array dan memindahkan nya menjadi array baru
//rumusnya slice (indexAwal,indexAkhir) contoh kita ingin mengiris 2 index maka index akhir harus ditambah 1

let mhs1 = mhs.slice(2, 5);
console.log(mhs1.join("-"));
