//Arrays for password generation
var num = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()+,-./:;<=>?[\]^_'{|}~";


// Prompt to generate how many characters for password
function generatePassword() {
  var pwCriteria = "";
  var generateNewpw = "";
  var i = 0;
  var passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);
  //Loop back if answer is not within these parameters
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    console.log(passwordLength);
    return false
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
    console.log(passwordLength);
    return false
  } else {
    var confirmSpecial = confirm("Click OK to confirm including special characters");
    if (confirmSpecial) {
      pwCriteria += special;
      console.log(pwCriteria);
    }

    var confirmNum = confirm("Click OK to confirm including numberic characters");
    if (confirmNum) {
      pwCriteria += num;
      console.log(pwCriteria);
    

    var confirmLower = confirm("Click OK to confirm including lowercase characters");
    if (confirmLower) {
      pwCriteria += lower;
      console.log(pwCriteria);
    

    var confirmUpper = confirm("Click OK to confirm including uppercase characters");
    if (confirmUpper) {
      pwCriteria += upper;
      console.log(pwCriteria);
    }

    //Loop if none are confirmed
    if (confirmSpecial != true && confirmNum != true && confirmLower != true && confirmUpper != true) {
      alert("Must select at least one character type");
      return false;
    }
    while (i < passwordLength) {
      generateNewpw += pwCriteria[Math.floor(Math.random() * pwCriteria.length)];
      console.log(generateNewpw);
      i++;
    }
    return generateNewpw;
  }
}

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




















