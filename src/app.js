/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("card").innerHTML = mixCards();
  const cardContent = mixCards();
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = cardContent;
};

function mixCards() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  const deck = ["♦", "♥", "♠", "♣"];
  const color = ["red", "black"];
  const mixNumber = Math.floor(Math.random() * numbers.length);
  const mixDeck = Math.floor(Math.random() * deck.length);
  const mixColor = Math.floor(Math.random() * color.length);
  const card = `${numbers[mixNumber]} ${deck[mixDeck]} ${color[mixColor]}`;
  return card;
  const cardElements = card.split(" ");

  document.getElementById("number").innerText = cardElements[0];
  document.getElementById("deck").innerText = cardElements[1];
  document.getElementById("color").innerText = cardElements[2];
}
mixCards();
function colorCard() {
  if (cardElements == "black") {
    cardElements.style.color = "black";
  } else {
    cardElements.style.color = "red";
  }
}
