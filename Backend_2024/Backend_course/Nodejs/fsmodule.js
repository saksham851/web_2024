const fs=require('fs');
// Now read  file function
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err ,data)
// })
//This runnig first but essa ku yeah nodejs mein samjhna walli bta ha
//becoz node js works on non-blocking i/o model i.e single thread pe 
//work karta ha tho agga ka kaam continue rahata ha jab tak file read hori ha 
//tab tak agga ka kaam karo ...
// console.log("Finished reading file")
// Now read file syn function
// read filesync intentionaly block karta
// ha which is imp in some case but read file not do same
// const a=fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("Finished reading file")

//Now write file function
// fs.writeFile('file2.txt',"This is a data",()=>{
//     console.log("Written to the file")
// });
// console.log("Finished reading file")
  
//Now write filesync function
// const b=fs.writeFileSync('file2.txt',"this is data2")
// console.log(b)
// console.log("Finished reading file")