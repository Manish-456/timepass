import getContents from "./getContents.js";

const alert = document.getElementById("alert");
const para = document.querySelector("p");
const content = document.getElementById("content");
const ul = document.getElementById("ul");
const warn = document.querySelector(".warn");
const players = [];
let playerCount = 0;

function updateName() {
  const name = prompt("Enter new name");
  const upperName = name.charAt(0).toUpperCase() + name.slice(1)
  players.push(upperName);
  alert.textContent = `New Player added successfully`;
  playerCount++;

  if (players.length > 0 && name) {
    let li = document.createElement("li");
    
    players.forEach((player) => {
      li.textContent = `${player} `;
    });
    li.setAttribute("class", "listItem")
    ul.appendChild(li);
    para.innerHTML = `player ${playerCount}: ${name}`;
    alert.style.opacity = 1;
    warn.style.display = "none";

  }
  setTimeout(() => {
    alert.style.opacity = 0;
  }, 5000);
}
para.addEventListener("click", updateName);

// Add change event on select element

const opt = document.getElementById("weather");

opt.addEventListener("change", setWeather);

function setWeather() {
  const { value } = opt;
  const contentLists = getContents(value);

  content.textContent = contentLists.desc;
}
