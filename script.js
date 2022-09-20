//get button
const tChange = document.getElementById("tChange");
tChange.style.cursor = "pointer"; //change cursor to pointer
tChange.addEventListener("click", function () {
  const red = Math.round(Math.random() * 255 + 1); //Math.random * 255 + 1;
  const blue = Math.round(Math.random() * 255 + 1); //Math.random * 255 + 1;
  const green = Math.round(Math.random() * 255 + 1); //Math.random * 255 + 1;
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

//pick slider red
const sliderRed = document.querySelector("input[name=red]");
//create slider range
const sliderGreen = document.createElement("input");
sliderGreen.setAttribute("type", "range");
sliderGreen.setAttribute("name", "green");
sliderGreen.setAttribute("min", "0");
sliderGreen.setAttribute("max", "255");

const sliderBlue = document.createElement("input");
sliderBlue.setAttribute("type", "range");
sliderBlue.setAttribute("name", "blue");
sliderBlue.setAttribute("min", "0");
sliderBlue.setAttribute("max", "255");

//color box red
const kMerah = document.createElement("div");
kMerah.classList.add("box");
kMerah.style.backgroundColor = "red";
kMerah.innerHTML = 128;
// kMerah.style.position = "absolute";

//color box green
const kHijau = document.createElement("div");
kHijau.classList.add("box");
kHijau.style.backgroundColor = "green";

//color box
const kBiru = document.createElement("div");
kBiru.classList.add("box");
kBiru.style.backgroundColor = "blue";

// sliderRed.before(kMerah);
// kMerah.after(sliderGreen);
// sliderGreen.after(kHijau);
// kHijau.after(sliderBlue);
// sliderBlue.after(kBiru);
//place the box color
sliderRed.before(kMerah);
sliderRed.after(kHijau);
kHijau.after(sliderGreen);
sliderGreen.after(kBiru);
kBiru.after(sliderBlue);

const container = document.querySelector("div.container");
//add events
sliderRed.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  kMerah.innerHTML = `${r}`;
  container.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sliderGreen.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  kHijau.innerHTML = `${g}`;
  container.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sliderBlue.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  kBiru.innerHTML = `${b}`;
  container.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

//event move
document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  const blue = Math.round((xPos + yPos) / 2);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
  // console.log(xPos);
  // console.log(yPos);
  console.log(`blue ${blue}`);
});
