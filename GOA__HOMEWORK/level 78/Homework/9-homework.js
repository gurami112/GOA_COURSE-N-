function wordFrequency(text) {
    let words = text.split(' ');
    let frequency = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    return frequency;
}

let text = "This is a exam. This hard is only a exam.";
let result = wordFrequency(text);
console.log(result);
