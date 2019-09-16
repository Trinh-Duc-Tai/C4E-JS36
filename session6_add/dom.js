let h1  = document.getElementById('first-h1');
console.dir(h1); //hay phết, hiển thị tất cả thuộc tính

console.log(h1.innerText);
h1.innerText = "DEMO HEADING ELEMENT";
console.log(h1.innerText);

let h2 = `<h2>Heading level 2</h2>`;
let div = document.getElementById('demo-div');
div.innerHTML += h2;

let anchor = document.getElementById('demo-anchor');
anchor.remove();