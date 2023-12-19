
const giftIds = [2, 1, 3, 5, 3, 2];
const giftIds2 = [1, 2, 3, 4];
const giftIds3 = [5, 1, 5, 1];

function findFirstRepeated(gifts){
    
    let repeatedIndexes = [];

    for(let i=0; i<giftIds.length; i++){

        repeatedIndexes.push(gifts.indexOf(gifts[i],i+1));

    }
    
    const filteredIndexes = repeatedIndexes.filter(numero => numero > -1)
    .sort((a,b) => a - b);

    if(filteredIndexes.length === 0){
        //return -1;
        console.log(-1);
    }else{
        //return filteredIndexes[0];
        console.log(gifts[filteredIndexes[0]]);
    }

}

findFirstRepeated(giftIds);
findFirstRepeated(giftIds2);
findFirstRepeated(giftIds3);