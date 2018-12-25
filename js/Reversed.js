function reverse(str) {
    let sentence = "";
    let words = str.split(/\s/);
    for (let i = 0; i < words.length; i++) {
        let newWord = "";
        let chars= words[i].split("");
        for (let j = chars.length - 1; j >= 0; j--) {
            newWord = newWord.concat(chars[j]);
        }
        sentence = sentence.concat(newWord + " ");
    }
    return sentence;
}
let sentenceReversed = reverse("Hello world, I'm going to sleep");
console.log(sentenceReversed);