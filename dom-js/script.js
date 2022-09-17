//document.querySelector()
const p4 = document.querySelector("section#b p");
p4.style.color = "red";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "lime";

const li = document.querySelectorAll("section#b ul li");
for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = `ini list item ${i + 1}`;
}
//querySelectorAll()
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightpink";
}
p4.style.backgroundColor = "grey";
