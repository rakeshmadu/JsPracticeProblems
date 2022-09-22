const prompt = require('prompt-sync')();

let date = prompt("Enter day Of the Month : ");
let month = prompt("Enter month Of the Year : ");

console.log("Date : " + date + "/" + month);

date = parseInt(date);
month = parseInt(month);

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");
