let voti=[5,8,10,9];
let somma = 0;
let media = 0;
for(n=0;n<voti.length;n++){
    somma=somma + voti[n];
    media=somma/voti.length;
}
console.log(media)