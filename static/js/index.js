
import getContents from "./getContents.js";
    const alert = document.getElementById("alert");
    const para = document.querySelector('p');
    const content = document.getElementById("content");
    const ul = document.getElementById("ul");
    const players = []
    let playerCount = 0;
    function updateName() {
      const name = prompt("Enter new name");
      players.push(name);
      alert.textContent = `New Player added successfully`;
      playerCount++;

      para.innerHTML = `player ${playerCount}: ${name}`
      alert.style.opacity = 1;

      if (players.length > 0) {

        let li = document.createElement("li");

        players.forEach(player => {
          li.textContent = `${player} `
        })

        ul.appendChild(li);
      } else {
        ul.innerHTML = "No players has been added yet"
      }
      setTimeout(() => {
        alert.style.opacity = 0
      }, 5000)
    }
    para.addEventListener('click', updateName);

    // Add change event on select element

    const opt = document.getElementById("weather");

    opt.addEventListener("change", setWeather);

    function setWeather() {
      const { value } = opt;
      const contentLists = getContents(value);


      content.textContent = contentLists.desc;







    }