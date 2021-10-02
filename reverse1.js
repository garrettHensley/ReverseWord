function reverseWord(word){
     return word.split("").reverse().join('')
}
const word = "reverse"
console.log(`${word} in reverse is: ${reverseWord(word)}`)