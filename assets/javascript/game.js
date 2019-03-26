$(document).ready(function(){

    var counter = 0;

    var targetNumber = 60;
    
    var numberOptions = [10, 11, 15, 1];
    var increment = numberOptions[Math.round(Math.random())];

    $("#number-to-guess").text(targetNumber);

    for (var i =0; i < numberOptions.length; i++) {

      var imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-image");

      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

      imageCrystal.attr("data-crystal-value", numberOptions[i]);

      $("#crystals").append(imageCrystal);
    }

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystal-value"));
  crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!")
    }else if(counter >= targetNumber) {
      alert("You lose!")
    }

  });



});