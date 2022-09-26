//kita tangkap container
const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    //kita ganti nilai src yang ada di class jumbo
    jumbo.src = e.target.src;
    // alert("ok");
    // tambaahkan animasi fade
    jumbo.classList.add("fade");
    //gunakan settimeout untuk menghilangkan kembali class fade
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    //hilangkan class active dari semua thumb
    thumbs.forEach((thumb) => {
      //jika menggunakan pengecekan class
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }

      //jika di paksa langsung
      thumb.className = "thumb";
    });

    //set active
    e.target.classList.add("active");
  }
});
