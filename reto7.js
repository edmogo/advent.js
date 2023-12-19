
/*

"
##########

#%%%%%%%%# #
#%%%%%%%%# %#
#%%%%%%%%# %%#
#%%%%%%%%# %%%#
#%%%%%%%%# %%%%#
#%%%%%%%%# %%%%%#
#%%%%%%%%# %%%%%%#
#%%%%%%%%# %%%%%%%#

########## %%%%%%%%#

#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
"

*/

function drawGift(size, symbol){

    const CARACTERLINEA = '#'
    const ESPACIO = ' ';
    const RETORNO = '\n';

    let res;

    const primeraLinea = ESPACIO.repeat(size-1)
                        .concat(CARACTERLINEA.repeat(size))
                        .concat(RETORNO);
    
    if(size - 2 > 0){let arrCadenas = [];

        const lineaCuadrado = CARACTERLINEA.concat(symbol.repeat(size-2))
                        .concat(CARACTERLINEA);

        arrCadenas.push(primeraLinea);

        for(let i=0; i<size-2; i++){

            let linea = ESPACIO.repeat(size-(2+i-1))
                        .concat(lineaCuadrado);
            linea = linea.concat(symbol.repeat(i))
                    .concat(CARACTERLINEA).concat(RETORNO);
            arrCadenas.push(linea);
        }

        const ultimaLinea = CARACTERLINEA.repeat(size)
                            .concat(symbol.repeat(size-2))
                            .concat(CARACTERLINEA).concat(RETORNO);

        arrCadenas.push(ultimaLinea);

        for(let i=size-2; i>=0; i--){

            arrCadenas.push(arrCadenas[i].trim().concat(RETORNO));

        }

        res = arrCadenas.toString().replaceAll(',','');
    }else{
        if(size === 1){
            res = '#\n';
        }else{
            res = ' ##\n###\n##\n'
        }
    }

    return res;

}

console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(2, "&"));
console.log(drawGift(10, "%"));