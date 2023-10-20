const item = document.querySelectorAll(".item"),
  computerElement = document.getElementById("computer"),
  playerElement = document.getElementById("player"),
  textResult = document.querySelector(".text-result h1");

const choices = [
  "../assets/media/paper.png",
  "../assets/media/rock.png",
  "../assets/media/scissors.png",
];

const displayResult = (result, playerChoice, computerChoice) => {
  computerElement.src = computerChoice;
  playerElement.src = playerChoice;
  textResult.innerText = result;
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === choices[1] && computerChoice === choices[2]) ||
    (playerChoice === choices[0] && computerChoice === choices[1]) ||
    (playerChoice === choices[2] && computerChoice === choices[0])
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};

const playTurn = (keyValue, computerChoice) => {
  computerChoice = choices[Math.floor(Math.random() * 3)];

  let playerChoice = `../assets/media/${keyValue}.png`;

  let result = determineWinner(playerChoice, computerChoice);

  displayResult(result, playerChoice, computerChoice);
};

item.forEach((item) => {
  item.addEventListener("click", (e) => {
    const keyValue = e.target.id;
    playTurn(keyValue);
  });
});
