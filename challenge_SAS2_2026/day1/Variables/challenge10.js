const prmpt=require("prompt-sync")();
let R=prmpt("entrer le rayon du récervoir : ");
let H=prmpt("entrer la hauteur du récervoir : ");
let V=Math.round(3.14*(Number(R)**2)*(Number(H)));
console.log("Rayon : " + R + "m");
console.log("Hauteur : " + H + "m");
console.log("Volume : " + V + "m3");
