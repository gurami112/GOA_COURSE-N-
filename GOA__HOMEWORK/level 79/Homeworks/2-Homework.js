function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = '';

    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

let text = "A man, a plan, a canal, Panama";
let result = isPalindrome(text);
console.log(result);
