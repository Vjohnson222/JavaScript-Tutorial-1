const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
//  10 minutes 

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

