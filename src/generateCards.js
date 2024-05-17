const generateCards = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  const deck = ["♦", "♥", "♠", "♣"];
  const color = ["red", "black"];

  const mixNumber = Math.floor(Math.random() * numbers.length);
  const mixDeck = Math.floor(Math.random() * deck.length);
  const mixColor = Math.floor(Math.random() * color.length);

  const numberPossition = numbers[mixNumber];
  const deckPossition = deck[mixDeck];
  let selectedColor = "";

  if (deckPossition == "♦" || deckPossition == "♥") {
    selectedColor = "text-danger";
  } else {
    selectedColor = "text-dark";
  }

  return `
<div
class="container-fluid text-center p-3 mb-2 bg-success text-white d-flex justify-content-center h-100"
>
<div
  class="card bg-white text-dark d-flex inline-block border border-dark border-4 justify-content-center"
  id="card"
>
  <span class="top-suit p-3 ${selectedColor}" >${deckPossition}</span>
  <span class="number ${selectedColor}">${numberPossition}</span>
  <span class="button-suit p-3 ${selectedColor}">${deckPossition}</span>
</div>
</div>
`;
};
export default generateCards;
