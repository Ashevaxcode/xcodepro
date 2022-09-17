// contoh switch
// var angka = parseInt(prompt("masukkan angka :"));

// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2");
//     break;

//   default:
//     alert("angka yang anda masukkan salah");
//     break;
// }

var item = prompt(
  "masukkan nama makanan / minuan : \n (contoh : nasi,daging,ikan,hamburger,cola)"
);

// switch (item) {
//   case "nasi":
//     alert("makanan / minuman sehat");

//     break;
//   case "daging":
//     alert("makanan / minuman sehat");
//     break;

//   case "hamburger":
//     alert("makanan / minuman tidak sehat");
//     break;
//   case "cola":
//     alert("makanan / minuman tidak sehat");
//     break;
//   default:
//     alert("Makanan / minuman yang anda masukkan salah");
//     break;
// }

// tanpa break
switch (item) {
  case "nasi":

  case "daging":
  case "ikan":
    alert("makanan /minuman sehat");
    break;
  case "hamburger":
    alert("makanan / minuman tidak sehat");
    break;
  case "cola":
    alert("makanan / minuman tidak sehat");
    break;
  default:
    alert("Makanan / minuman yang anda masukkan salah");
    break;
}
