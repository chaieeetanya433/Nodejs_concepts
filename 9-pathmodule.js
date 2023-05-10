const path = require('path')

//returns platform specific separator
console.log(path.sep)

//joins all the arguments and returns the path
const filePath = path.join('/nodejs', 'modules', 'text.txt')
console.log(filePath)

//often used to extract the filename from the qualified path
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'nodejs', 'modules', 'text.txt')
console.log(absolute);
