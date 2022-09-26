const card = document.querySelectorAll(".card");
const container = document.getElementsByClassName("container")[0];

const x = document.querySelectorAll(".close");

// for (let i = 0; i < x.length; i++) {
//   x[i].addEventListener("click", function (e) {
//     // card[i].style.display = "none";
//     //menggunakan parrent

//     //mengggunakan dom traversal
//     // x[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";

//   });
// }

//dapat juga menggunakan foreach karena x adalah sebuah node list dan dapat diperlakukan seperti array
//arrow function
const nama = document.querySelectorAll(".nama");
console.log(nama[1].nextElementSibling)

x.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();

  });
});

nama.forEach((el)=>{
  el.addEventListener("click",function(e){
    e.target.nextElementSibling.style.display ="none";
  })
})

// nama.forEach((el) => {
//   el.addEventListener("dbclick", function(e) {
//     e.target.nextElementSibling.style.display = "block";
//   })
// })

//foreach biasa
// x.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// });

