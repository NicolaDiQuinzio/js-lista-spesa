const list = ["toast", "avocado", "salmone", "uova", "semi"];

const ul = document.querySelector("ul");
let counter = 0;

while (counter < list.length) {
  const li = document.createElement("li");
  li.innerHTML = list[counter];
  ul.appendChild(li);
  counter++;
}
