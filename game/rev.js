const areaPlayer = document.querySelectorAll(".areaPlayer ul li");

for (let i = 0; i < areaPlayer.length; i++)
  areaPlayer[i].addEventListener("click", function () {
    //generate pilihan komputer
    function getPilihanComp() {
      const pComp = Math.random();
      // console.log(pComp);
      if (pComp < 0.34) return "gajah";
      if (pComp >= 0.34 && pComp < 0.68) return "orang";
      return "semut";
    }

    // console.log(`${areaPlayer[i].className}`);
    if (areaPlayer[i].className == "gajah") {
      console.log(`anda memilih ${areaPlayer[i].className}`);
    }
    if (areaPlayer[i].className == "semut") {
      console.log(`anda memilih ${areaPlayer[i].className}`);
    }
    if (areaPlayer[i].className == "orang") {
      console.log(`anda memilih ${areaPlayer[i].className}`);
    }
  });

//generate pilihan komputer
// s

// const pGajah = document.querySelector(".gajah");
// const pSemut = document.querySelector(".semut");
// const pOrang = document.querySelector(".orang");
// pGajah.addEventListener("click", function () {
//   //   console.log(pGajah.className);
//   const pComp = Math.random();
//   console.log(pComp);
//   if (pComp < 0.34) {
//     console.log("gajah");
//   } else if (pComp > 0.35 && pComp < 0.68) {
//     console.log("orang");
//   } else {
//     console.log("semut");
//   }

//   if (pGajah.className == "gajah box") {
//     // alert("anda memilih gajah");
//   }
// });
