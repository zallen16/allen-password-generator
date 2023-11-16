// Assignment code here
const minLength = 8;
const maxLength = 128;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";


function generatePassword () {
  
  var allChars = "";
  var question1 = confirm("Is this true?");
    console.log("question1", question1);
  var question2 = prompt("Type anything below");
    console.log("question2", question2);

  var passwordLength = prompt("Length of password?");
    console.log("question3", question3);  
    if (question3) {
        var choice = prompt;
      }
      if (choice == i<8 || i>128){
        return;
      };
}
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);