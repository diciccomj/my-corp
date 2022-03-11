
// user interface desgin notes
/* this is a multiline comment

clicking on buttons
keyboard
image on screen
mouse 
touch 


arrays are a collection of elemenst which are accessed through a variety of indexes

*/

let UserChoice;

let choices = ["rock","paper","scissors"]

console.log("RPS!!!!!");
let cpu = Math.floor(Math.random()*choices.length);
// let person = prompt("choose", "put choice here");
console.log("the cpu choice value was " + cpu)
// fill in computer's result depending on outcome

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create
function CreateImageRock() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "_img/rocky.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Rock");
    document.body.appendChild(x);
  }
  function CreateImagePaper() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "_img/paper.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Paper");
    document.body.appendChild(x);
  }
  function CreateImageScissors() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "_img/scissors.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Scissors");
    document.body.appendChild(x);
  }

function playRps(){
    console.log("The computer chose...:" + choices[cpu]);
    if (cpu == 0 && userChoice == "scissors"){
        CreateImageScissors();
        connsole.log("comptuter wins")
    }
   
   
        //     // img here
    //     const img = document.createElement("img")
    //     console.log("computer chose rock...");
    //     const para = document.createElement("p");
    //     para.innerText = 'computer chose rock...';
    //     document.body.appendChild(para);
    // }

    function input1 (){
        userChoice = "rock";
        playRps();
    }
    }
//     else if (false) {
//         console.log();
//     }
//     else {
//         console.log();
//     }