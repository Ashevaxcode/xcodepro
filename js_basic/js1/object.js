//membuat object
let mahasiswa = {
  nama: "asep supriatna",
  jurusan: "teknik informatika",
  lulus: true,
  ipSemester: [2.95, 3.21, 4.1, 4.52, 3.5, 4.2],
  ipk: function () {
    let total = 0;
    let ips = this.ipSemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    //let nilaiTambahan = 0.5;
    return parseFloat(
      //parse float adalah merubah string to float
      Math.fround(total / this.ipSemester.length).toPrecision(3)
    ); //+ nilaiTambahan
  },
  //kita bisa membuat object di dala object
  alamat: {
    jalan: "jl. summarecon estate no.30",
    kota: "bandung",
    provinsi: "jawa barat",
  },
};

console.log(
  `Nama :${mahasiswa.nama}
  Sekarang tinggal di ${mahasiswa.alamat["jalan"]} kota ${
    mahasiswa.alamat.kota
  } 
  Lulus dengan nilai ${mahasiswa.ipk()}`
);
