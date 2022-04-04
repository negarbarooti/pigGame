'use strict'
let score1el= document.querySelector('.score--1');
let score2el= document.querySelector('.score--2');
const diceel = document.querySelector('.roll-dice__img');
const cscore1 = document.querySelector(".currentscore--1");
const cscore2 = document.querySelector(".currentscore--2");
let player1 ;
let player2 ;



const restartbtn = document.querySelector(".new-game__btn");
restartbtn.addEventListener("click" , initialize);
initialize();

function initialize (){
score1el.textContent=0;
score2el.textContent=0;
diceel.classList.add('hidden');
cscore1.textContent = 0 ;
cscore2.textContent = 0 ;
player1 = true ;
player2= false ;
document.getElementsByClassName("player-box__1")[0].classList.add("turn") ;
document.getElementsByClassName("player-box__2")[0].classList.remove("turn") ;

}
const dicebtn = document.querySelector(".roll-dice__btn");
dicebtn.addEventListener("click" , rollingdice);
function rollingdice(){
    diceel.classList.remove("hidden");

    let scoreNum = 0 ;
    
    let randomNum = Math.floor(Math.random() * (7 - 1) + 1);
    diceel.src=`img/dice-${randomNum}.png`;
    if(randomNum === 1 )
    {
        switchplayer();
        return ; 
    }
    if(player1){
        
    scoreNum = Number(cscore1.innerHTML);
    scoreNum += randomNum ; 
    cscore1.textContent = scoreNum ; 
    }
    else{
        
    scoreNum = Number(cscore2.innerHTML);
    scoreNum += randomNum ; 
    cscore2.textContent = scoreNum ; 
    }

}
const holdbtn = document.querySelector(".hold__btn");
holdbtn.addEventListener("click" , holding) ; 
function switchplayer (){
    if(player1){
        cscore1.textContent = 0 ;
    player1 = false ;
    player2 = true ;
    document.getElementsByClassName("player-box__1")[0].classList.remove("turn") ;
        document.getElementsByClassName("player-box__2")[0].classList.add("turn") ;
    }
    else{
        cscore2.textContent = 0 ;
    player1 = true ;
    player2 = false ;
    document.getElementsByClassName("player-box__1")[0].classList.add("turn") ;
        document.getElementsByClassName("player-box__2")[0].classList.remove("turn") ;

    }
}
function holding(){
    if(player1){
        
    let number = Number(score1el.innerHTML); 
    number += Number(cscore1.innerHTML); 
    score1el.textContent = number ; 
   switchplayer();
    }
    else {        
    let number = Number(score2el.innerHTML); 
    number += Number(cscore2.innerHTML); 
    score2el.textContent = number ; 
    switchplayer();

    }
    
}