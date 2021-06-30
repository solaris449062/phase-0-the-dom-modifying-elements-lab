//removing the 'main' node
let elementMain = document.getElementsByTagName('main')[0];
elementMain.remove();

// index.html
// after index.js is processed
// has a 'newHeader' variable that points to node 'h1#victory':

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "is the champion"
document.body.appendChild(newHeader);
