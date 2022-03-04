// Write your solution below:
function unique(string) {
    let word = [...new Set(string)].join('')
    return word
}
console.log(unique('helloworld'))
// let string = 'helloworld'
// console.log([...new Set(string)].join(''))