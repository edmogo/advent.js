
/*



 */


function organizeGifts(gifts){

    const regex = /[0-9]+|[a-zA-Z]+/g;

    let grupos = gifts.match(regex);
    let pares = [];

    for(let i=0; i<grupos.length; i+=2){
        let letra = grupos[i+1];
        let numero = parseInt(grupos[i]);

        pares.push([letra,numero]);
    }

    let res = '';

    pares.forEach(grupo => {

        let numBolsas = grupo[1] % 10;
        let numCajas = (grupo[1] - numBolsas)/10;
        let numPales = 0;

        while(numCajas >= 5){
            numPales += 1;
            numCajas -= 5;
        }

        let cadenaBolsas;

        if(numBolsas !== 0){
            cadenaBolsas = '('+ grupo[0].repeat(numBolsas) +')'
        }else{
            cadenaBolsas = '';
        }

        res = res.concat(`[${grupo[0]}]`.repeat(numPales))
                .concat(`{${grupo[0]}}`.repeat(numCajas))
                .concat(cadenaBolsas);

    })

    return res;

}

console.log(organizeGifts("76a11b"));
console.log(organizeGifts("20a"));
console.log(organizeGifts("70b120a4c"));
console.log(organizeGifts("9c"));
console.log(organizeGifts("19d51e"));