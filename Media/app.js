const prompt = require("prompt-sync")({ sigint: true });
let voti=3
let voto1=prompt("Voto 1:");
voto1=Number(voto1);
let voto2=prompt("Voto 2:");
voto2=Number(voto2);
let voto3=prompt("Voto 3:");
voto3=Number(voto3);

let media=(voto1+voto2+voto3)/voti;
console.log("La media è " + media);