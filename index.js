
/*******************************************
* ADD EVENT LISTENER TO EACH ELEMENT
*********************************************/
//Loop through every element that has the class "drum" and add an event listener to each one of them
var numOfDrumButtons = document.querySelectorAll(".drum").length; //first we create a variable for number of
                                                                  //buttons that have the drum class

for (var i = 0; i < numOfDrumButtons; i++) //Now we use the variable in the loop
{
  document.querySelectorAll(".drum")[i].addEventListener("click", myClickListener); //Add event listener calling (needs two parameters, what to listen to, and what to do when listened)
                                                                                  //function we created below
}

/*******************************************
* EVENT LISTENER FOR CLICK (CALLS MAKE SOUND)
*********************************************/
//Function to let us know a button has been clicked and also to play something when clicked
function myClickListener()
{
  var buttonInnerHTML = this.innerHTML;
  //call make sound passing the buttonInnerHTML
  makeTheSound(buttonInnerHTML);
  //call the animation for when its clicked
  flashAnimmation(buttonInnerHTML);
}

/*******************************************
* EVEN LISTENER FOR KEYS
*********************************************/
//Add even listener for key presses
document.addEventListener("keydown", keyListener); //adding to entire document NO NEED FOR LOOP

function keyListener()
{
  //call make saound when pressing key
  makeTheSound(event.key);
  //call the animation when pressing key
  flashAnimmation(event.key);
}

/*******************************************
* FUNCTION TO MAKE THE SOUNDS
*********************************************/
//MAKE THE sounds
function makeTheSound(key)
{
  switch (key) //switch by every button's inner html
  {
    case "w":
      var crash =  new Audio("sounds/crash.mp3"); //creates html element for audio
      crash.play(); //plays it
      break;

    case "a":
      var kick =  new Audio("sounds/kick-bass.mp3"); //creates html element for audio
      kick.play(); //plays it
      break;

    case "s":
      var snare =  new Audio("sounds/snare.mp3"); //creates html element for audio
      snare.play(); //plays it
      break;

    case "d":
      var tom1 =  new Audio("sounds/tom-1.mp3"); //creates html element for audio
      tom1.play(); //plays it
      break;

    case "j":
      var tom2 =  new Audio("sounds/tom-2.mp3"); //creates html element for audio
      tom2.play(); //plays it
      break;

    case "k":
      var tom3 =  new Audio("sounds/tom-3.mp3"); //creates html element for audio
      tom3.play(); //plays it
      break;

    case "l":
      var tom4 =  new Audio("sounds/tom-4.mp3"); //creates html element for audio
      tom4.play(); //plays it
      break;

    default: console.log();
  }
}

function flashAnimmation(currentKey)
{
  //access the class in this format ".w" and store into variable to reuse later
  var activatedButton = document.querySelector("." + currentKey); //current key is not appropiate format, so I need to concatenate with "."

  //add class to the activated button (who already accessed all button classes)
  activatedButton.classList.add("pressed");

  //call methor setTimeOut to remove the pressed class after 100 miliseconds
  setTimeout(function() { //anonymous function here (defined in the parameters)
    activatedButton.classList.remove("pressed"); //remove the class
  }, 100); //second argument is the miliseconds to wait
}
