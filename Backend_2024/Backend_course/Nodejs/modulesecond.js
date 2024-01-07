//we import like this if extension is .js but form .mjs procedure is different
// const simple=require("./modulefirst");
// simple()

//importing for .mjs extention
// And to run .mjs we have to add type field in package.json
// import {simple} from "./modulefirst.mjs"
// simple()

// execute simple2 as simple...
// import {simple2 as simple} from "./modulefirst.mjs"
// simple()

// when u try to remove bracket u have to add default in any function mandotaory
// import simple23 from "./modulefirst.mjs"
// simple23()

import  * as a2 from "./modulefirst.mjs"
console.log(a2);
console.log(a2.simple());