const submit = document.getElementById('submit')
const finalResult = document.getElementById('result')

submit.addEventListener('click', (e) => {

    e.preventDefault()
    let str = document.getElementById('userInput').value
    
    reverseString(str);

});

const reverseString = (str) => {

    let splitStr = str.split('')
    //console.log(splitStr) 
    let reverseArray = splitStr.reverse()
    //console.log(reverseArray)
    let result = reverseArray.join('')
    //console.log(result)

    if (result === str) {
        finalResult.innerHTML = `${str} is a palindrome.`
    } else {
        finalResult.innerHTML = `${str} is not a palindrome.`
    }

    submit.style.marginTop = '10px'

};

/* 
function checkPalindrome(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("1122332211")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome"); */
