const prompt = require("prompt-sync")({ sigint: true });
const pi=Math.PI;
let raggio=prompt("Il raggio è di:");
let area=pi*Math.pow(raggio,2);
let diametro=Math.sqrt((4*area)/pi);
let circonferenza=pi*diametro;
console.log("La circonferenza è di: " + circonferenza);
console.log("Il diametro è di: " + diametro);
console.log("L'area è di: " + area);
