const http = require('http');

//first object in callback module represents an incoming request coming from client
//second object in callback module represents an outgoing response going from server
const server = http.createServer((req,res)=>{
    //url property will tell us what address client is requesting us
    if(req.url === '/') {
        res.end('welcome to our home page')
    } 
    if(req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p>we can't seem to find the page you're looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
