//ambil video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

const jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //ambil durasi masing2 video
  //tanda titik adalah metode chaining
  .map((item) => item.dataset.duration)
  //ini baru menampilkan durasi dengan tipe string

  //ubah durasi menjadi integer, dan menit menjadi detik, dan menghilangkan separator : menggunakan split
  .map((waktu) => {
    const parts = waktu
      .split(":")
      //ubah tiap durasi menjadi float
      .map((part) => parseFloat(part));

    //jumlahkan menit dan detik
    return parts[0] * 60 + parts[1];
  })
  //jumlahkan seluruh durasi
  .reduce((acc, curr) => acc + curr);

//ubah ke dalam jam
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut - jam * 3600) / 60);
const detik = Math.floor(jsLanjut - jam * 3600 - menit * 60);

const pDurasi = document.querySelector(".durasi");
pDurasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

//ambil jumlah video
const jmlVideo = document.querySelector(".jmlVideo");
const totalVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
);

//tampilkan kedalam website
jmlVideo.textContent = `${totalVideo.length} video`;

console.log(detik);
