//document.querySelector()
//menghasilkan element
const p4 = document.querySelector("#b p");
p4.innerHTML = "ini dirubah dengan javascript";
p4.style.color = "red";
p4.style.backgroundColor = "yellow";
p4.style.fontSize = "1.5em";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "red";
li2.style.color = "white";
li2.style.fontSize = "18px";
li2.style.fontWeight = "bold";
li2.style.fontStyle = "italic";
// li2.style.textDecoration = "overline";
li2.style.textDecoration = "underline overline line-through"; //digabung text decoation

//querySelectorAll()
const li = document.querySelectorAll("#b ul li");
// li[1].style.backgroundColor = "orange";
li[0].style.backgroundColor = "lime";

const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
