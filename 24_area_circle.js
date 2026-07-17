const prompt=require("prompt-sync")();
const pi=3.14;
let radius=Number(prompt("Enter a radius:"));
let area = pi*radius*radius;
console.log("Area of Circle:" + area);