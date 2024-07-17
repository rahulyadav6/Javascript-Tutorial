let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let heading = document.querySelector("h1");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let randomDiceImage1 = `images/dice${randomNumber1}.png`;
let randomDiceImage2 = `images/dice${randomNumber2}.png`;
image1.setAttribute("src",randomDiceImage1);
image2.setAttribute("src",randomDiceImage2);



if(randomNumber1 > randomNumber2){
    heading.innerHTML = "🚩Player1 wins!!";
}else if(randomNumber1 < randomNumber2){
    heading.innerText = "Player2 wins!!🚩";
}else{
    heading.innerText = "Draw";
}