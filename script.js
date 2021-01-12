// Assignment Code

 

// 1. click button to generate a password

var generateBtn = document.querySelector("#generate");

 

// 

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

    var specialChar;

 

    while (!specialChar) {

        var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", ";", "<", ">", "?", "/",];

        var firstRandom = getRandomNumber();

        var secondRandom = Math.floor(Math.random() * 100)

        var randomToUse = getRandomNumber() % 2 == 0 ? firstRandom : secondRandom

        var randomChar = specialChars[randomToUse];

 

        if (!!randomChar) {

            specialChar = randomChar;

 

            break;

        }

    }

 

    return specialChar; 

}

 

// function to generate password

function generatePassword() {




    // this variable will have userInput prompt captrued 

    var userInput = prompt("Choose your password length");

    var isCancellation = [null, undefined].filter(function (x) { return userInput == x }).length > 0;

 

    if (isCancellation) {

        return;

    }

    var isPromptingAgain = userInput.length == 0;

 

    if (isPromptingAgain) {

        alert("Please enter valid length range between 8 and 128");

        generatePassword();

        return;

    }

 

    var parsed = parseInt(userInput);

    if (Number.isNaN(parsed) || userInput < 8 || userInput > 128) {

        alert("Please enter valid length range between 8 and 128");

        return myPassword = "";

    }

 

    var myPassword = [];

 

    var upper = confirm("Does your password includes upppercase letters ?");

    var lower = confirm("Does your password includes lowercase letters ?");

    var numbers = confirm("Does your password includes numbers letters ?");

    var specialchar = confirm("Does your password includes special characters ?");

 

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

 

    var currentMyPasswordLength = myPassword.length;

 

    if (currentMyPasswordLength === 0) {

        alert("Please choose at least one character type");

        return;

    }

    

 

    while(myPassword.length != parsed) {

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

    

    var myFinalPassword = myPassword.join("");

 

    return myFinalPassword;

 

}

// this variable will have userInput prompt captrued 






// variable that holds the generated password

 

// for loop that chooses random characters in the arrays user chose

 

//B. generate password (using selected criteria!)

// Returns user generated password

 

// Write password to the #password input

function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector("#password");

 

    passwordText.value = password;

}

////-alert or write it to the page

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

 