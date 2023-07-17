const {readFile,writeFile} = require('fs').promises;
// const {readFile,writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async() =>{
    try{
        // const first = await getText('./first.txt')
        // const second = await getText('./second.txt')
        // const first = await readFilePromise('./first.txt', 'utf8');
        // const second = await readFilePromise('./second.txt', 'utf8');
        const first = await readFile('./first.txt', 'utf8');
        const second = await readFile('./second.txt', 'utf8');
        await writeFile(
            './test.txt',
            `THIS IS OSM : ${first} ${second}`,
            {flag : 'a'}
        )
        // await writeFilePromise(
        //     './test.txt',
        //     `THIS IS OSM : ${first} ${second}`
        // )
        console.log(first,second)
    } catch(error) {
        console.log(error)
    }
}

start()

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }
// getText('./first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))
