const path = require('path');

console.log(path.sep)

const filepath=path.join('./content', 'subfolder', 'test.txt')
console.log(filepath)

// basename is  what is written in end in  the file
const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content' , 'subfolder' , 'test.txt')
console.log(absolute)