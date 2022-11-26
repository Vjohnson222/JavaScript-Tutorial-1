const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// part 2 Shapes 
const shapes = ['÷','β','⅔','⌂', "________", "&", '€','£','¥','©','±',"<------->", "$$$", 'ﷺ','ﷲ',"?", "😊", "@%#!",'ﭮ','ﻱ','ﻙ', "{./}", "||", "=>"];
const btn2 = document.getElementById("btn2");
const shapeHere = document.querySelector(".shapeHere");

btn2.addEventListener("click", function () {
  const randomShape = getRandomShape();
  // console.log(randomNumber);

  document.body.style.backgroundColor = shapes[randomShape];
  shapeHere.textContent = shapes[randomShape];
});

function getRandomShape() {
  return Math.floor(Math.random() * shapes.length);
}
// --------------Random words----------------- 




const words = ["once","upon","a","time","there","was","a","little","girl","named","Franny","She","liked","to","visit","mountains","and","Oceans","Now","known","as","Happiest","Girl","ever",];
const btn3 = document.getElementById("btn3");
const wordsHere = document.querySelector(".wordsHere");

btn3.addEventListener("click", function () {
  const randomWords = getRandomWords();

  document.body.style.backgroundColor = words[randomWords];
  wordsHere.textContent = words[randomWords] ;
  
});

function getRandomWords() {
  return Math.floor(Math.random() * words.length);
  
}

