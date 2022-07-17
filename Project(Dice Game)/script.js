let refresh = document.querySelector('.btn');

let player1Score = 0;
let player2Score = 0;
localStorage.setItem('p1',player1Score);
localStorage.setItem('p2',player2Score);

refresh.addEventListener('click',()=>{

let img2 = document.querySelector('.img2');
let randomNumberOne = Math.ceil(Math.random()*6);
let randomNumberTwo = Math.ceil(Math.random()*6);
let winMessage = document.querySelector('.winMessage');
let img1 = document.querySelector('.img1');
let countDown = document.querySelector('.countDown');

src1= 'images/dice'+randomNumberOne+'.png';
src2= 'images/dice'+randomNumberTwo+'.png';

let player1div = document.querySelector('.p1');
let player2div = document.querySelector('.p2');



console.log(src1);

console.log(randomNumberOne +" "+randomNumberTwo)

img1.setAttribute("src",src1);
img2.setAttribute("src",src2);


if(randomNumberOne > randomNumberTwo)
{
  winMessage.innerHTML = "Player One  Win";
  player1Score++;
  localStorage.setItem('p1',player1Score);
  
}
else if((randomNumberOne < randomNumberTwo)){
  winMessage.innerHTML = "Player Two Win";
  player2Score++;
  localStorage.setItem('p2',player2Score);

  
}
else{
  winMessage.innerHTML = "Both Win";
}


player1div.innerHTML = localStorage.getItem('p1');
player2div.innerHTML = localStorage.getItem('p2');

let countDownNum = 600000;
setInterval(()=>{
  countDownNum--;
  countDown.innerHTML = countDownNum;
},1)



refresh.disable = true;
setTimeout(()=>{
  location.reload();
},600000)

});