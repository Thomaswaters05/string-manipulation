var button = document.getElementById("submit");
button.addEventListener('click', submit);


document.getElementById("lettersOnly");
document.getElementByid("output");



function reversal(uno) {
  return uno.split("").reverse().join("");
}

function alphabits(dos) {
  return dos.split("").sort().join("");

}

function palindrome(tres) {
  return tres === reversal(tres);
}

var testString = "";
function submit (){
 testString = lettersOnly.value
 output.innerHTML = "<div>" + testString + "</div>"; //outputs normal
 output.innerHTML += "<div>" + reversal(testString) + "</div>"; // outputs reverse
 output.innerHTML += "<div>" + alphabits(testString) + "</div>";// outputs in alphabetical order
 output.innerHTML += "<div>" + palindrome(testString) + "<div>";// outputts true or false if its a palindrome.
 }