
function cyberReindeer(road, time){

    const SECTION = '.';
    const CLOSEDBARRIER = '|';
    const OPENEDBARRIER = '*';
    const SLED = 'S';

    let res = [road];

    let actualRoad = road;

    let replaceChar = SECTION;

    for(let i=1; i<time; i++){

        if(i === 5){
            actualRoad = actualRoad.replaceAll(CLOSEDBARRIER,OPENEDBARRIER);
        }

        let nextChar = actualRoad.charAt(actualRoad.indexOf(SLED)+1);

        if(nextChar !== CLOSEDBARRIER){

            actualRoad = actualRoad.substring(0,actualRoad.indexOf(SLED)+1)+
                SLED+actualRoad.substring(actualRoad.indexOf(SLED)+1+1);
            actualRoad = actualRoad.replace(SLED,replaceChar);

            if(nextChar === OPENEDBARRIER){
                replaceChar = OPENEDBARRIER;
            }else{
                replaceChar = SECTION;
            }

        }

        res.push(actualRoad);

    }    

    return res;

}

console.log(cyberReindeer('S..|...|..', 10));
console.log(cyberReindeer('S.|.', 4));
console.log(cyberReindeer('S.|.|.', 7));
console.log(cyberReindeer('S.|..', 6));
console.log(cyberReindeer('S.|.|.|......|.||.........', 8));