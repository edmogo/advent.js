function distributeGifts(weights) {
    
    function media (valores){
        valores = valores.filter(elemento => typeof elemento === 'number');
        let sumatoria = valores.reduce((acumulador, numero) => acumulador + numero,0);
        return Math.round(sumatoria/valores.length);
    }

    function buscaVecinos(x,y){

        let arriba,abajo,izda,dcha;

        if(x-1 >=0){
            arriba = weights[x-1][y];
        }else{
            arriba = null;
        }
        if(x+1 < weights.length){
            abajo = weights[x+1][y];
        }else{
            abajo = null;
        }
        if(y-1 >=0){
            izda = weights[x][y-1];
        }else{
            izda = null;
        }
        if(y+1 < weights[x].length){
            dcha = weights[x][y+1];
        }else{
            dcha = null;
        }
        
        return [arriba,abajo,izda,dcha];

    }

    let res = [];

    for(let i=0; i<weights.length; i++){

        let tupla = [];

        for(let j=0; j<weights[i].length; j++){

            let vecinos = buscaVecinos(i,j);
            
            vecinos.push(weights[i][j]);
            
            let nuevoValor = media(vecinos);
            
            tupla.push(nuevoValor);

        }

        res.push(tupla);
    }
  
    return res
}

console.log(distributeGifts([
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]))