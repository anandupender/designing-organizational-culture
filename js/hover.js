const colors = ["#ffbe0b","#fb5607","#ff006e","#667EFF"];

let words = "Designing Organizational Culture";
let container = document.querySelector("#hover-fun");

let letters = words.split("");
console.log(letters);
var word = document.createElement("div");

container.innerHTML = "";
for(var i = 0; i < letters.length; i++){
    var newLetter = document.createElement("div");

    newLetter.innerHTML = letters[i];
    word.appendChild(newLetter);

    if(letters[i] == " " || i == letters.length - 1){
        container.appendChild(word);
        word = document.createElement("div");
    }

    newLetter.classList.add("letter");
    newLetter.onmouseover = function(){
        var random = Math.random() * 100;
        // this.style.transform = `rotate(${random}deg)`
        // this.style.transform = `scale(1.4)`
        var randomColor = Math.floor(Math.random() * colors.length);
        console.log(randomColor);
        this.style.color = colors[randomColor];

    }
    newLetter.onmouseleave = function(){
        // this.style.transform = "rotate(0deg)"
        // this.style.transform = `scale(1)`
        this.style.color = "#111";

    }
}

