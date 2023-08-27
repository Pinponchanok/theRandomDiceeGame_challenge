var randomNumber1 = Math.random(); 
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);  

var randomNumber2 = Math.random(); 
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2); 

var diceeIMG = ["./Diceimg/D1.png","./Diceimg/D2.png","./Diceimg/D3.png","./Diceimg/D4.png","./Diceimg/D5.png","./Diceimg/D6.png"]

document.querySelector(".player1 img.size").setAttribute("src",diceeIMG[randomNumber1]); 
document.querySelector(".player2 img.size").setAttribute("src",diceeIMG[randomNumber2]);  

var flagImage = document.createElement("img");
flagImage.src = "./Diceimg/flag.png";
flagImage.alt = "Flag";
flagImage.className = "flag-icon" 

function headChanging() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector(".container .heading h1").textContent = "Draw";
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector(".container .heading h1").textContent = "Player1 Win";
        document.querySelector(".container .heading h1").insertBefore(flagImage, document.querySelector(".container .heading h1").firstChild);
    } 
    else {
        document.querySelector(".container .heading h1").textContent = "Player2 Win";
        document.querySelector(".container .heading h1").insertAdjacentElement("afterend", flagImage);
    }
}  


headChanging(); 

