// //mencoba looping mundur
// let nilai = document.getElementById("nilai");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//rekursif adalah sebuah function yang dapat memanggil dirinya sendiri
function cetakAngka(n) {
  if (n === 0) {
    // base case agar rekursifnya dapat berhenti
    return;
  }
  console.log(n);
  return cetakAngka(n - 1);
}
console.log(cetakAngka(9));
