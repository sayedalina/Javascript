const prompt  = require("prompt-sync")();
let base = Number(prompt("enter base:"));
let height =Number(prompt("Enter height:"));
let area = 0.5*base*height;
console.log( "area of triangle:"   + area );