//object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  //   property object
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  //   method pada object
  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      console.log(`${namaPenumpang} sudah naik`);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          console.log(`${namaPenumpang} sudah naik`);
          return this.penumpang;
        } else if (this.penumpang[i] == namaPenumpang) {
          console.log(`${namaPenumpang} sudah ada didalam angkot`);
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          console.log(`${namaPenumpang} sudah naik`);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    // inisialisasi angkot kosong
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          console.log(`${namaPenumpang} sudah turun`);
          console.log(`total kas ${this.kas}`);
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          console.log(`${namaPenumpang} tidak ada di dalam angkot`);
          return this.penumpang;
        }
      }
    }
  };
}
let angkot1 = new Angkot("asheva", ["Cicadas", "Alun-alun"], [], 0);
