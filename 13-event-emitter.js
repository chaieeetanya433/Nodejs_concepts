const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//on - listen for an event(.on is used to add a callback function that's going to be executed when the event is triggered.)
//emit - emits an event(.emit is used to trigger an event)

customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} with id:${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`data received `)
})

customEmitter.emit('response', 'john', 34)