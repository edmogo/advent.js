

/*const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';*/

/*const gifts = ['libro', 'ps5']
const materials = 'psli'*/

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

function manufacture(gifts, materials){

    let listaFabricables = [];

    gifts.forEach(element => {
        
        let flag = true;

        for(let i=0; i<element.length; i++){
            if(!materials.includes(element[i])){
                flag = false;
            }
        }

        if(flag){
            listaFabricables.push(element);
        }

    });

    console.log(listaFabricables);
    return listaFabricables;

}

manufacture(gifts, materials);