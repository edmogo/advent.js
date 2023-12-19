
const original = 'abcd'
const modified = 'abcde'

const original1 = 'stepfor'
const modified1 = 'stepor'

const original2 = 'abcde'
const modified2 = 'abcde'

const original3 = 'aeebc';
const modified3 = 'aebc';

function findNaughtyStep(original, modified) {
    
    let diference = original.length - modified.length;
    let largo, corto;

    if(diference === 0){
        return '';
    }else if(diference < 0){

        largo = modified;
        corto = original;

    }else{

        largo = original;
        corto = modified;

    }

    for(let i=0; i<corto.length; i++){
        if(largo.includes(corto[i])){
            largo = largo.replace(corto[i],'');
        }
    }

    console.log(largo);

}

findNaughtyStep(original, modified);
findNaughtyStep(original1, modified1);
findNaughtyStep(original2, modified);
findNaughtyStep(original3, modified3);
