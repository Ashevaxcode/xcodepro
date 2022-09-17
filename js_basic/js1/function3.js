//program menjumlahkan vulume 2 kubus
//dom selection
var nilai = document.getElementById("nilai");

//func declaration
function penjumlahanVolume(a, b) {
  //input dari user

  var volumeA = a * a * a;

  var volumeB = b * b * b;
  var total;
  total = volumeA + volumeB;

  return total;
}

var a, b, hasil;
a = parseInt(prompt("masukkan sisi kubus A"));
b = parseInt(prompt("masukkan sisi kubus B"));
hasil = penjumlahanVolume(a, b);
nilai.innerHTML = `hasil penjumlahan 2 kubus adalah ${hasil}`;

// alert(penjumlahanVolume(8, 3));
