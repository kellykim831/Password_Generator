//Arrays for password generation
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "?", "+"];


//Prompt to generate how many characters for password
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");

  //Loop back if answer is not within these parameters
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return false
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
    return false
  } else if (passwordLength >= 8 || passwordLength <= 128) {
    var confirmSpecial = confirm("Click OK to confirm including special characters");
    var confirmNum = confirm("Click OK to confirm including numberic characters");
    var confirmLower = confirm("Click OK to confirm including lowercase characters");
    var confirmUpper = confirm("Click OK to confirm including uppercase characters");
  }
  //Loop if none are confirmed
  while (confirmSpecial != true && confirmNum != true && confirmLower != true && confirmUpper != true) {
    alert("Must select at least one character type");
    return false;
  }
}

// return characterTypes;


// function generatePassword() {
//   var options = generateOptions();
//   console.log(options);

// var randomPassword = [];
// console.log(randomPassword);

// if (options.confirmSpecial) {
//   for (i = 0; i < special.length; ++i) {
//     passwordCharacters.push(special[i]);
//   }

// } if (options.confirmNum) {
//   for (i = 0; i < num.length; ++i) {
//     passwordCharacters.push(num[i]);

//   } if (options.confirmLower) {
//     for (i = 0; i < lower.length; ++i) {
//       passwordCharacters.push(lower[i]);
//     } if (confirmUpper) {
//       for (i = 0; i < upper.length; ++i) {
//         passwordCharacters.push(upper[i]);
//       }
//     }
//   }
// }


//   var newPassword = [];

//   for (let i = 0; i < options.length; ++i) {
//     var numgenerator = Math.floor(Math.random() * Math.floor(passwordCharacters.length));
//     newPassword.push(passwordCharacters[numgenerator]);
//   }

//   console.log(newPassword);



  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);




















