
let user;

let choices = ["rock", "paper", "scissors",];

function userChoice(choice) {
  user = choice;
  compare();

// console.log("this the rock paper scissors ");
// let cpu = Math.floor(Math.random()*choices.length);
// let user = prompt("Choose...");
console.log("the cpu choice value was " + cpu)
// fill in computer's result depending on outcome

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create

// function diceRoll(sides){
//     let sides = prompt("how many sides?");
//     let numsides = parseInt(sides);
//     let outcome = Math.floor(Math.random()*numsides);
//     alert(outcome);
// }
// diceRoll();

function drawImg(pic, width, height, alt, id){
  var x = document.createElement("IMG");
  x.setAttribute("src", pic);
  x.setAttribute("width", width);
  x.setAttribute("height", height);
  x.setAttribute("alt", alt);
  document.body.appendChild(x);
  document.getElementById(id).appendChild(x)
}
// i got this from https://www.w3schools.com/jsref/met_node_removechild.asp
function removeChild(id){
  let identity = document.getElementById(id);
  while (identity.firstChild){
    identity.removeChild(identity.firstChild);
  }
}

function randNum(things){
  return Math.floor(Math.random() * things.length);
}

function cpuChoice(){
  // cpu will be the same value all the time
  return choices[randNum(choices)];
}
// used to reload the page .....
// function ReloadPage(){
//   location.reload();
// }

function compare(){
  let cpu = cpuChoice();
  removeChild("player");
  removeChild("cpu");
  if (user == "rock"){
        drawImg("_images/rocky.jpg", "100", "100", "rock", "player");  
    }
    if (user == "paper"){
        drawImg("_images/paper.jpg", "100", "100", "paper", "player");  
    }
    if (user == "scissors"){
        drawImg("_images/scissors.jpg", "100", "100", "scissors", "player");  
    }
    if (cpu == "rock"){
        drawImg("_images/rocky.jpg", "100", "100", "rock", "cpu");  
    }
    if (cpu == "paper"){
        drawImg("_images/paper.jpg", "100", "100", "paper", "cpu");  
    }
    if (cpu == "scissors"){
        drawImg("_images/scissors.jpg", "100", "100", "scissors", "cpu");  
    }
    if ((user == "rock" && cpu == "scissors") ||
        (user == "paper" && cpu == "rock") ||
        (user == "scissors" && cpu == "paper")) {
        console.log("user wins the game...");
    }
    else if (cpu == "rock" && user == "scissors" ||
        cpu == "paper" && user == "rock" ||
        cpu == "scissors" && user == "paper") {
        console.log("user loses the game...");
    }
    else if (cpu == user){
        console.log("tie game...");
    }
    else {
        console.log("something went wrong");
    }
}
}


// function userRock(){
//     console.log("this function is working...")
//     userChoice = "rock";
//     drawImg("_images/rocky.jpg", "300", "300", "rock");
//     playRps();
// }
// function userPaper(){
//     userChoice = "paper";
//     drawImg("_images/paper.jpg", "300", "300", "paper");
//     drawPaper();
// }
// function userScissors(){
//     userChoice = "scissors";
//     drawImg("_images/scissors.jpg", "300", "300", "scissors");
// }
// the user is rock and the computer is scissors, the code below bascially says, if the user is rock
// and the computer is scissors, then the user wins the game. The {} basically means "then".
// but the != means flase, which we replaced for ==


// what if this function could draw any image...





// function playRps(){
//     console.log("The computer chose...: "  + choices[cpu]);
//     if (cpu == 0 && userChoice == "scissors"){
//         drawImg("_images/rocky.jpg");
//         console.log("computer wins...")
//     }
//     else if (cpu == 1 && userChoice == "scissors") {
//         console.log("you win");
//         drawImg("_images/paper.jpg");
//     }
//     else if (cpu == 2 && userChoice == "scissors") {
//         console.log("you tied");
//     }
//     else if (cpu == 0 && userChoice == "paper") {
//         console.log("you win");
//     }
//     else if (cpu == 1 && userChoice == "paper") {
//         console.log("you tied");
//     }
//     else if (cpu == 2 && userChoice == "paper") {
//         console.log("you lost");
//     }
  
// make situations for loses based on code above
