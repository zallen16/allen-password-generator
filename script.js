// Assignment code here
const minLength = 8;
const maxLength = 128;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";


function generatePassword () {
  
  var allChars = "";
  
  var passwordLength = prompt("Length of password?");
  console.log("question3", passwordLength);  
  
  if (passwordLength<8 || passwordLength>128){
    alert ("Password must be at least 8 characters and no more than 128");
    return "Please try again";
  };
  var confirmLowerCase = confirm("Include lowercase letters?"); 
    console.log("question1", confirmLowerCase);
  var confirmUpperCase = confirm("Include uppercase letters?");
    console.log("question2", confirmUpperCase);
  var confirmNumbers = confirm("Include numbers?"); 
    console.log("confirmNumbers", confirmNumbers);
  var confirmCharacters = confirm("Include special characters?");
    console.log("confirmCharacters", confirmCharacters);
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