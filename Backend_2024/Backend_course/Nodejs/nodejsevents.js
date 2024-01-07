const EventEmitter =require('events');

class MyEmitter extends EventEmitter{}

const myEmitter =new MyEmitter();

myEmitter.on('WaterFull',()=>{
    console.log('Plz turn off the motor');
    setTimeout(()=>{
    console.log('Plz turn off the motor!Its a gental reminder');
    },3000)
});
myEmitter.emit('WaterFull');
console.log('script is running');
console.log('script is still running');
