const prompt=require("prompt-sync")();
let X1=prompt("entrez le coordonée du X1 : ");
let Y1=prompt("entrez le coordonée du Y1 : ");
let Z1=prompt("entrez le coordonée du Z1 : ");
let X2=prompt("entrez le coordonée du X2 : ");
let Y2=prompt("entrez le coordonée du Y2 : ");
let Z2=prompt("entrez le coordonée du Z2 : ");
let Distance=((Number(X2-X1)**2) + (Number(Y2-Y1)**2) + (Number(Z2-Z1)**2))**(1/2);
console.log("Position A : (" + X1 + "," + Y1 + "," + Z1 + ")");
console.log("Position B : (" + X2 + "," + Y2 + "," + Z2 + ")");
console.log("Distance  : " + Distance);

