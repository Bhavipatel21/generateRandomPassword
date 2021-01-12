// Assignment Code

// 1. click button to generate a password
var generateBtn = document.querySelector("#generate");

//created functions to get random upper,lower, number and specialchar 
function getRandomUpper() {
  var upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return upper;
}

function getRandomLower() {
  var lower = getRandomUpper().toLowerCase();
  return lower;
}

function getRandomNumber() {
  var randomNum = Math.floor(Math.random() * 10);
  return randomNum;
}

function getRandomSpecialChar() {
  
  var specialChars = [
    "~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","|","[","]",";","<",">","?","/"];
    var randomChar = specialChars[Math.floor(Math.random() * specialChars.length)];

  return randomChar;
}

// function to generate password

function generatePassword() {

  // A. prompt for password criteria
 var userInput = prompt("Choose your password length");
 var isCancellation =
    [null, undefined].filter(function (x) {
      return userInput == x;
    }).length > 0;

  if (isCancellation) {
    return;
  }
  //-prompt for length- at least 8 characters and no more than 128 characters
  var isPromptingAgain = userInput.length == 0;
  if (isPromptingAgain) {
    alert("Please enter valid length range between 8 and 128");
    generatePassword();
    return;
  }

  var parsed = parseInt(userInput);
  if (Number.isNaN(parsed) || userInput < 8 || userInput > 128) {
    alert("Please enter valid length range between 8 and 128");
    return (myPassword = "");
  }

// -select criteria for password
  var myPassword = [];
  var upper = confirm("Does your password includes upppercase letters ?");
  var lower = confirm("Does your password includes lowercase letters ?");
  var numbers = confirm("Does your password includes numbers letters ?");
  var specialchar = confirm("Does your password includes special characters ?");
  
  //B. generate password (using selected criteria!)
  // add userinput to myPassword variable
  if (upper) {
    myPassword.push(getRandomUpper());
  }
  if (lower) {
    myPassword.push(getRandomLower());
  }
  if (numbers) {
    myPassword.push(getRandomNumber().toString());
  }
  if (specialchar) {
    myPassword.push(getRandomSpecialChar());
  }
  // check to make sure one character type is used
  var currentMyPasswordLength = myPassword.length;
  if (currentMyPasswordLength === 0) {
    alert("Please choose at least one character type");
    return;
  }

  //created while loop to add remianing password length
  while (myPassword.length != parsed) {
    var random = getRandomNumber();
      var isAddingSpecialChar = random % 4 == 0 && specialchar;
    if (isAddingSpecialChar) {
      myPassword.push(getRandomSpecialChar());
      continue;
    }
    var isAddingNumber = random % 3 == 0 && numbers;
    if (isAddingNumber) {
      myPassword.push(random.toString());
      continue;
    }
    var isUpperCase = random % 2 == 0 && upper;
    if (isUpperCase) {
      myPassword.push(getRandomUpper());
      continue;
    }
    var isLowerCase = random % 1 == 0 && lower;
    if (isLowerCase) {
      myPassword.push(getRandomLower());
      continue;
    }
  }
  
  
//covert password array to string
  var myFinalPassword = myPassword.join("");

// Returns user generated password  
  return myFinalPassword;
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//-alert or write it to the page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
