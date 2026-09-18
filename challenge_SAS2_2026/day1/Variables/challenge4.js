const prompt=require("prompt-sync")();
let K=prompt("enter la distance parcourue en kilometres");
let L=prompt("enter la quantité de carburant consommée en litres");
let C=L/K;
console.log("Distance :" + K + "km");
console.log("Carburant :" + L + "litres");
console.log("Consomation :" + Math.round(C*100) + "litres/km");


    
