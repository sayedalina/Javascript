const prompt = require("prompt-sync")();
let age = Number(prompt("enter your age:"));
let result = age >= 18 ? "Eligible for vote" : "Not Eligible for vote";
console.log(result);