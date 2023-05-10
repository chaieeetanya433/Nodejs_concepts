const {readFileSync, writeFileSync, write} = require('fs')
console.log('start')
const first = readFileSync('./first.txt','utf8');
const second = readFileSync('./second.txt','utf8');

// console.log(first, second)
writeFileSync('./result-sync.txt',
`here is the result:  ${first}, ${second}`,
{flag: 'a'}     //when there is and object we're appending with everything in that file again
)

console.log('done with this')
console.log('starting with next')



