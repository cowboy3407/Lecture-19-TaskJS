//split

const textSplit = "I love learnig JavaScript";
console.log(textSplit.split(""));


//loop

const words = ["Some", "Words", "Are", "Bigger", "Than", "Uuuusuuaaal"];
console.log(words);

for (let w = 0; w < words.length; w++) {
    if (words[w].length >= 5) {
        words[w] = "LongWord";
    }
    else {
        words[w] = "ShortWord";
    }

}

console.log(words.join(" "));

//while loop

let sentence = ("How Many Words Do Contain A")
let sentenceA = sentence.split(" ")
let count = 0;
let c = 0;

do {
    if (sentenceA[c].includes("a")) {
        count++;
    }
    c++;
} while (c < sentenceA.length)

console.log(count, "This is amount of a's in this sentence");


