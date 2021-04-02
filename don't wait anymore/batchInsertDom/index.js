let ul = document.getElementById("ul");
let fragement = document.createDocumentFragment();
let i = ul.children.length - 1;
while (i >= 0) {
	let c = ul.children[i];
	fragement.appendChild(c);
	i--;
}
document.body.removeChild(ul);
ul = document.createElement("ul");
ul.appendChild(fragement);
document.body.appendChild(ul);
