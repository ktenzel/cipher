var sentence = prompt("Write a sentence:")
var firstLetter = sentence.charAt(0);
var lastLetter = sentence.slice(- 1);
console.log(sentence);

alert(lastLetter.toUpperCase() + firstLetter.toUpperCase());
