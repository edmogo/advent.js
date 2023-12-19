
const movements = '>>*<';
const movements2 = '<<<>';
const movements3 = '>***>';
function maxDistance(movements){

    let distancia = 0;
    let contadorAsteriscos = 0;

    for(let i=0; i<movements.length; i++){
        
        if(movements[i] === '*'){
            contadorAsteriscos += 1;
        }else{
            if(movements[i] === '>'){
                distancia += 1;
            }else{
                distancia -= 1;
            }
        }

    }

    if(distancia >= 0){
        distancia = distancia + contadorAsteriscos;
    }else{
        distancia = distancia - contadorAsteriscos;
    }

    return Math.abs(distancia);

}

console.log(maxDistance(movements));
console.log(maxDistance(movements2));
console.log(maxDistance(movements3));