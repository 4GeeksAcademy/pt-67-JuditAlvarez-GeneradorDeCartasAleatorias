import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import generateCards from "./generateCards";
window.onload = function() {
  const app = document.getElementById("app");
  app.innerHTML = generateCards();
};
