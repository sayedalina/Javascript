const prompt=require("prompt-sync")();
let length= Number(prompt("Enter length"));
let breadth = Number (prompt("enter breadth"));
let area= length*breadth;
console.log("area of rectangle" + area);