// 1. Selection & Text
const text = document.getElementById("text");
const textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", () => {
  text.innerText = "My boss, Asiwaju will help you!";
});


// 2. Styles & Classes
const shape = document.getElementById("shape");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  shape.classList.toggle("rounded-full");
  shape.classList.toggle("rounded-lg");
  shape.classList.toggle("bg-purple-500");
  shape.classList.toggle("bg-emerald-400");
});


// 3. Creating Nodes
const list = document.getElementById("list");
const addItem = document.getElementById("addItem");

let count = 2;

addItem.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = `New Dynamic Item #${count}`;
  list.appendChild(li);
  count++;
});


// 4. Event Object
const box = document.getElementById("box");
const x = document.getElementById("x");
const y = document.getElementById("y");

box.addEventListener("mousemove", (event) => {
  const rect = box.getBoundingClientRect();

  const xPos = event.clientX - rect.left - rect.width / 2;
  const yPos = event.clientY - rect.top - rect.height / 2;

  x.innerText = Math.round(xPos);
  y.innerText = Math.round(yPos);
});

box.addEventListener("mouseleave", () => {
  x.innerText = 0;
  y.innerText = 0;
});
