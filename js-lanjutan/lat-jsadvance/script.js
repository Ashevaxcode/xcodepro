//ambil video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

const jsLanjut = videos.filter((video)=>video.textContent.includes("JAVASCRIPT LANJUTAN"))

//ambil durasi masing2 video
//tanda titik adalah metode chaining
.map(item=>item.dataset.duration);




console.log(jsLanjut);
