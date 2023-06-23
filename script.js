var magic8Ball = {};

magic8Ball.answers = ["Yes", "No", "Maybe", "Ask again later"];

function shake() {
  var randomNumber = Math.floor(Math.random() * 4);
  var answer = magic8Ball.answers[randomNumber];
  document.getElementById("answer").innerHTML = answer;
}

document.getElementById("shake").addEventListener("click", shake);