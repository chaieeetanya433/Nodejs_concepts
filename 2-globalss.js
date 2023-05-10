//common js, every file is module (by default)
//modules - encapsulated code (only share minimum)


//GLOBALS - NO WINDOW!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules(common js)
// module = info about current module(file)
// process - info about env where the program is being executed

console.log(__dirname) 
setInterval(()=>{
    console.log('hello world')
}, 1000)

