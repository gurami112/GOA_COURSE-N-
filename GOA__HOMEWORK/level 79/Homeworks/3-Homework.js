function areAnagrams(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let word1 = "listen";
let word2 = "silent";
let result = areAnagrams(word1, word2);
console.log(result);
