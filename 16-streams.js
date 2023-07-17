//streams in nodejs
//streams are used to read and write data sequentially
// Readable − Stream which is used for read operation.
// Writable − Stream which is used for write operation.
// Duplex − Stream which can be used for both read and write operation.
// Transform − A type of duplex stream where the output is computed based on input.

//defualt 64kb
//last buffer - remainder
//highWaterMark - control size

//read file
const {createReadStream} = require('fs');

const stream = createReadStream('./big.txt', {
    highWaterMark: 90000,
    encoding:'utf8'
});

stream.on('data', (result)=>{
    console.log(result)
})