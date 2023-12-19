

function autonomousDrive(store, movements) {

    const VACIO ='.';
    const ROBOT ='!';
    const OBSTACULO = '*';

    function queHay(posicion,movimiento){

        let [x,y] = posicion;

        switch (movimiento) {
            case 'R':
                y++;
                break;
            case 'L':
                y--;
                break;
            case 'U':
                x--;
                break;
            case 'D':
                x++;
                break;
        }

        if(x < 0 || x >= store.length ||
            y < 0 || y > store[x].length)
        {
            return OBSTACULO;
        }else{
            return [store[x].charAt(y),[x,y]];
        }

    }

    function reemplazaCaracter(p1,p2){

        let parte1, parte2;

        // DESPLAZAR AL ROBOT A SU NUEVA POSICION

        parte1 = store[p2[0]].slice(0,p2[1]);
        parte2 = store[p2[0]].slice(p2[1]+1);

        store[p2[0]] = parte1 + ROBOT + parte2;

        // LIBERAR LA POSICION QUE OCUPABA EL ROBOT

        parte1 = store[p1[0]].slice(0,p1[1]);
        parte2 = store[p1[0]].slice(p1[1]+1);

        store[p1[0]] = parte1 + VACIO + parte2;

    }

    let posicionInicial = [];

    for(let i=0; i<store.length; i++){
        if(store[i].includes(ROBOT)){
            posicionInicial.push(i);
            posicionInicial.push(store[i].indexOf(ROBOT));
        }
    }

    let posicionRobot = posicionInicial;

    movements.forEach(element => {
        
        let caracterNuevaPosicion = queHay(posicionRobot,element);
        
        if(caracterNuevaPosicion[0] !== OBSTACULO){

            reemplazaCaracter(posicionRobot,caracterNuevaPosicion[1]);
            posicionRobot = caracterNuevaPosicion[1];

        }

        console.log(store);

    });

    //return store;

}

autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])