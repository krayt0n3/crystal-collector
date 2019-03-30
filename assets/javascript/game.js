$(document).ready(function(){

    var counter = 0;
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var numberOptions;
  

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var guessNumber = getRandomInt(19, 120);
    targetNumber = guessNumber;

    function randomNumberGenerator (low, high) {

      var a = [];
      
      a.push(Math.floor(Math.random() * high) + low);
      
      a.push(Math.floor(Math.random() * high) + low);
      
      a.push(Math.floor(Math.random() * high) + low);

      a.push(Math.floor(Math.random() * high) + low);
      
      return a;
      
      }

      numberOptions = randomNumberGenerator(1, 12);


    $("#number-to-guess").text(targetNumber);

    
    for (var i =0; i < numberOptions.length; i++) {

      var imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-image");

      imageCrystal.attr("src", "https://raw.githubusercontent.com/krayt0n3/crystal-collector/initial-site/assets/images/crystal.jpg");

      imageCrystal.attr("data-crystal-value", numberOptions[i]);

      $("#crystals").append(imageCrystal);
    }

function initiate() {

$(".crystal-image").on("click", function start() {

  var crystalValue = ($(this).attr("data-crystal-value"));
  crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      wins += 1;
      alert("You win!");
      console.log("you win");
      reset();
    }else if(counter > targetNumber) {
      losses += 1;
      alert("You lose!");
      console.log("you lose");
      reset();
    }else{
      console.log("continue");
    }; 
    
    $("#number-of-wins").text(wins);
    $("#number-of-loss").text(losses);
  })};

function reset() {
  counter = 0;
  guessNumber = [];
  numberOptions = [];
  targetNumber = [];
  guessNumber = getRandomInt(19, 120);
  targetNumber.push(guessNumber);
  numberOptions = randomNumberGenerator(1, 12);
  $("#number-to-guess").text(targetNumber);
}

initiate();

});