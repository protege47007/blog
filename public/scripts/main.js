const text = ["Welcome", "I'm David"];
let counter = 0;
let index = 0;
let currentTxt = '';
let letter = '';
var typing = document.querySelector('.typing');

(function type(){
    //if(counter === text.length){
      //  counter = 0;
    //}

    currentTxt = text[counter];
    letter = currentTxt.slice(0, ++index);
    
    typing.textContent = letter;
    
    if (letter.length == currentTxt.length) {
        counter++;
        index =0; 
    }
    setTimeout(type, 400);
}());