const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./first.txt','utf8',(err,result)=>{
    if(err) {
        console.log(err)
        return; 
    } 
    const first = result;
    readFile('./second.txt','utf8', (err, result)=>{
        if(err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile(
            './result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return;
                } 
                    // console.log(result);
                    console.log('done with this task')
            })
    })
})
console.log('starting with next task')




