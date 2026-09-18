const prompt=require("prompt-sync")();
let U=prompt("enter la tension U en volts ; ");
let I=prompt("entrer Lintensité I en amperes : ");
let T=prompt("entrer le temps t en heures : ");
let E=U*I*T;
console.log("Tension : " + U + "V");
console.log("Intensite : " + I + "A");
console.log("Temps : " + T + "heures");
console.log("Energie : " + E + "Wh");