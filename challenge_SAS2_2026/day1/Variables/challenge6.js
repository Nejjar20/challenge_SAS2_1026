const prompt=require("prompt-sync")();
let P1=prompt("enter score 1 : ");
let P2=prompt("enter score 2 : ");
let P3=prompt("enter score 3 : ");
let P4=prompt("enter score 4 : ");
let Somme=Number(P1)+Number(P2)+Number(P3)+Number(P4);
let Moyenne=Somme/4;
console.log("Score total : " + Somme);
console.log("Moyenne : " + Moyenne);