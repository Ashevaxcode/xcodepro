//memasukkan function sebagai argument untuk parameter
function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  var total;
  total = a * b;
  return total;
}

hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);

function kurang() {
  return arguments; //mengembalikan nilai dari parameter dan akan di tampung dalam var array arguments
}

var min = kurang(8, 9, 10, "hello", true);
console.log(min);
