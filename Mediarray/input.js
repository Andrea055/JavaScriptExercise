const prompt = require("prompt-sync")({ sigint: true });
let voti=[];
let somma= 0;
let media = 0;
let n=0;
console.log("Inserire i valori per cui si vuole fare la media, inserire -1 per terminare l'esecuzione")
while(voti[n]!="0"){
    voti[n]=prompt("Voto " + n +" :")
    if(voti[n]!="0"){
        voto=Number(voti[n])
        somma=somma+voto;
        media=somma/voti.length;
        n=n+1;
    }

    
}
console.log("La media è " + media);