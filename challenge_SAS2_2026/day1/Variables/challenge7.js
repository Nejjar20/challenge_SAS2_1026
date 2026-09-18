const prompt=require("prompt-sync")();
let CC=prompt("entrer la note de contrôle continu : ");
let Projet=prompt("entrer la note de projet : ");
let examen=prompt("entrer la note d'examen final : ");
let noteFinale=((Number(CC)*2) +(Number(Projet)*3) +(Number(examen)*5))/10;
console.log("Controle continu : " + CC);
console.log("Projet : " + Projet);
console.log("Examen final : " + examen);
console.log("Note finale : " + noteFinale);