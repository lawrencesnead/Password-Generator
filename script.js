// Prompts for user to select what sort of password they would like to gnerate
// alert("Welcome to Lawrence's Password Generator!")
// var passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.")
// var passLengthChecker = Number(passLength)
// var charTypeSpec = confirm("Would you like these special characters, which includes a space?  !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
// var charTypeNum = confirm("Would you like numeric characters 0-9?")
// var charTypeLower = confirm("Would you like lowercase characters?")
// var charTypeUpper = confirm("Would you like uppercase characters?")


console.log(passLength)
// var charTypeSpec = document.querySelector("")
// var charTypeNum = document.querySelector("")
// var charTypeLower = document.querySelector("")
// var charTypeUpper = document.querySelector("")
// Varibles for buttons

var generateBtn = document.querySelector("#gen")
var copyBtn = document.querySelector("#copy")
var passwordBox = document.querySelector("#pass-final")

// Initial varibales with different sets of characters to select from

var specialChars = " !\"/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numChars = "0123456789"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var upperChars = lowerChars.toUpperCase()

var charListFinal = ""

var printChecks = function () {
    var selected = new Array()

    var checkBoxes = document.getElementsByName("checks")

    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            selected += checkBoxes[i].value
        }
        else {
            selected += 'f'
        }
    }
    return selected
}


// Helper function to make final character list to select from for password generation and then returns the completed list

var generateFinalCharList = function () {
    var selectedTemp = printChecks()
    var temp = ""
    if (String(selectedTemp[0]) === 't') {
        temp += specialChars
    }
    if (String(selectedTemp[1]) === 't') {
        temp += numChars
    }
    if (String(selectedTemp[2]) === 't') {
        temp += lowerChars
    }
    if (String(selectedTemp[3]) === 't') {
        temp += upperChars
    }
    
    charListFinal = temp
    return charListFinal
}

// Function to generate a random password and place password into password div

var generatePass = function () {
    // event.preventDefault()
    var pass = ""
    var charList = generateFinalCharList()
    var passLength = document.getElementById("passLength").value
    if (Number(passLength) > 128 || Number(passLength) < 8) {
        alert("You must choose a length between 8 and 128.")
        return
    }
    if (charList === "") {
        alert("Must select at least one character type.")
        return
    }
    for (var i = 0; i < passLength; i ++) {
        pass += charList[Math.floor(Math.random() * charList.length)]
    }
    passwordBox.textContent = pass
}

// Copy generated password to the clipboard

var copyText = function () {
    var copyText = document.getElementById("pass-final");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    alert("Your generated password has been copied to the clipboard!")
    textArea.remove();
   }

// When buttons are clicked event listeners

generateBtn.addEventListener("click", generatePass)
copyBtn.addEventListener("click" , copyText)

