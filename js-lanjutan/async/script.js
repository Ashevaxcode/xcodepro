//async (arg) =>
console.log("ini perintah ke-1");
setTimeout(() => {
  console.log("ini perintah ke-2");
}, 5000);
console.log("ini perintah ke-3");
console.log("ini perintah ke-4");
// asynchronous
setTimeout(() => {
  console.log("ini perintah ke-5");
  console.log("ini melalui asynchronous");
}, 7000);
console.log("ini perintah ke-6");
setTimeout(() => {
  console.log("ini perintah ke-7");
}, 5500);
