let name = "Matt"
console.log(myName);

    // this function logs a line of text in the browser
    console.log("hello world");
    console.log(myHeading);
   
    function init(){
        changeHeading();
        greeting();
    }
    
    function changeHeading() {
        let myHeading = document.querySelector('h1');
        myHeading = document.querySelector('h2');
        myHeading.textContent = 'よろしく!';
    }

    let greetingPrefix = "hello there, ";
    
    function greeting(){
        const para = document.createElement("p");
        para.innerText = greetingPrefix + myName;
        document.body.appendChild(para);
    
    }