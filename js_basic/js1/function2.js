//program menjumlahkan vulume 2 kubus
//dom selection
var nilai = document.getElementById("nilai");

//func declaration
function penjumlahanVolume(a, b) {
  //input dari user
  a = prompt("masukkan sisi kubus A");
  b = prompt("masukkan sisi kubus B");

  var volumeA = a * a * a;

  var volumeB = b * b * b;
  var total;
  total = volumeA + volumeB;

  return total;
}
nilai.innerHTML = `Volume dari 2 kubus adalah ${penjumlahanVolume()}`;

// alert(penjumlahanVolume(8, 3));
