const areaPlayer = document.querySelectorAll(".areaPlayer ul li");

    //generate pilihan komputer
    // function getPilihanComp() {
    //   const pComp = Math.random();
    //   // console.log(pComp);
    //   if (pComp < 0.34) return "gajah";
    //   if (pComp >= 0.34 && pComp < 0.68) return "orang";
    //   return "semut";
    // }
    
    function getHasil(comp,player){
      
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    
    }
    
    //tangkap gambar comp
    const imgComp = document.querySelector(".areaCom img");
    

for (let i = 0; i < areaPlayer.length; i++)
  areaPlayer[i].addEventListener("click", function () {
    
    function getPilihanComp() {
      const pComp = Math.random();
      // console.log(pComp);
      if (pComp < 0.34) return "gajah";
      if (pComp >= 0.34 && pComp < 0.68) return "orang";
      return "semut";
    }

    const pilCom = getPilihanComp();
    const pilPlayer= areaPlayer[i].className;
    console.log(pilCom);
    console.log(pilPlayer);
    
    console.log(getHasil(pilCom,pilPlayer));
  //   if (areaPlayer[i].className == "gajah") {
  //     console.log(`anda memilih ${areaPlayer[i].className}`);
  //   }
  //   if (areaPlayer[i].className == "semut") {
  //     console.log(`anda memilih ${areaPlayer[i].className}`);
  //   }
  //   if (areaPlayer[i].className == "orang") {
  //     console.log(`anda memilih ${areaPlayer[i].className}`);
  //   }
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
