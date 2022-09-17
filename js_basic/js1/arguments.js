//memanfaatkan psuedo variabel arguments pada javascript

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

var hitung = tambah(1, 2, 9, 8, 10, 7, "hai");
console.log(hitung);

var a = 1;
