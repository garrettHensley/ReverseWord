function reverseWord(revWord){
    const revArr = [];
    revWord.split("")
    for(let i = revWord.length -1; i >= 0; i--){
        revArr.push(revWord[i])
    }
    return revArr.join('')
}
const word = "code time"
console.log(`${word} in reverse is: ${reverseWord(word)}`)