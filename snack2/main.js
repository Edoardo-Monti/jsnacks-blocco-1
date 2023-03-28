const primaParola = prompt(`inserisci una parola`)
const secondaParola = prompt(`inserisci una parola`)


if(primaParola.length > secondaParola.length){
    console.log(`primaParola`)
}else if(primaParola.length == secondaParola.length){ 
    console.log(`primaParola, secondaParola`)
}else{
    console.log(`secondaParola`)
}