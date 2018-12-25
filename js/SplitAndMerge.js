function splitAndMerge(str, sp) {
    let sentence = "";
    let words = str.split(/\s/);
    for (let i = 0; i < words.length; i++) {
        let newWord = "";
        let chars= words[i].split("");
        for (let j = 0; j < chars.length; j++) {
            newWord = newWord.concat(chars[j] + sp);
        }
        newWord = newWord.slice(0,newWord.length - 1);
        sentence = sentence.concat(newWord + " ");
    }
    return sentence.trim();
}
let sentenceSplit = splitAndMerge("Hello world, nice to see you", "*");
console.log(sentenceSplit);