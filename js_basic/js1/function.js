// var nama = "asheva xcode";
// console.log(nama.charAt(5));

// let nama1 = document.getElementById("nama").value;
// console.log(nama1);

//function declaration
console.log("funcion Declaration");

function jmlDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}
console.log(jmlDuaBilangan(4, 3));
alert(jmlDuaBilangan(1, 2));

//function expression
//kita masukkan function kedalam variabel
console.log("\nfunction expression");
var jmlTigaBilangan = function (a, b, c) {
  var total;

  total = a + b + c;
  return total;
};
console.log(jmlTigaBilangan(1, 2, 3));
alert(jmlTigaBilangan(1, 2, 3));
