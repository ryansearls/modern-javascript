var moment = require("moment");
var math = require("mathjs")

console.log("Hello There");
var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

console.log(math.round(math.e, 3));


let name = "Ryan";

console.log(`How are you today ${name}`);
