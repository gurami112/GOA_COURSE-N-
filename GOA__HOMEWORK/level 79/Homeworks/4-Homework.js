function reverseSentence(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    return reversedWords.join(' ');
}

let sentence = "Hello, goa!";
let result = reverseSentence(sentence);
console.log(result);
