//jab bhi koi module node js mein run hota ha tho ussa function sa automatic rap kardata ha
//we didnt wanna do that we did it for explination purpose...
//(function(exports,require,module,__filename,__dirname){
sak = {
    name: "sak",
    favNum: 3,
    devloper: true
}
//Module rapper function
console.log(exports,require,module,__filename,__dirname)
module.exports=sak;
//})