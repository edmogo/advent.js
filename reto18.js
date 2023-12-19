/*[
  ["*","*","*"," "," "," ","*"," "," "," ","*","*","*"," ","*","*","*"],
  ["*"," ","*"," "," "," ","*"," "," "," "," "," ","*"," ","*"," ","*"],
  ["*"," ","*"," "," "," ","*"," ","*"," "," "," ","*"," ","*"," ","*"],
  ["*"," ","*"," "," "," ","*"," "," "," ","*","*","*"," ","*"," ","*"],
  ["*"," ","*"," "," "," ","*"," ","*"," "," "," ","*"," ","*"," ","*"],
  ["*"," ","*"," "," "," ","*"," "," "," "," "," ","*"," ","*"," ","*"],
  ["*","*","*"," "," "," ","*"," "," "," ","*","*","*"," ","*","*","*"]
]*/

/*
    AAA EEA AAA AAA AEA AAA AAA AAA AAA AAA
    AEA EEA EEA EEA AEA AEE AEE EEA AEA AEA
    AEA EEA EEA EEA AEA AEE AEE EEA AEA AEA
    AEA EEA AAA AAA AAA AAA AAA EEA AAA AAA
    AEA EEA AEE EEA EEA EEA AEA EEA AEA EEA
    AEA EEA AEE EEA EEA EEA AEA EEA AEA EEA
    AAA EEA AAA AAA EEA AAA AAA EEA AAA AAA
*/



function drawClock(time) {

    const ASTERISK = '*';
    const ESPACE = ' ';

    const grupos = [
        [ASTERISK,ASTERISK,ASTERISK],
        [ASTERISK,ESPACE,ASTERISK],
        [ASTERISK,ESPACE,ESPACE],
        [ESPACE,ESPACE,ASTERISK]
    ];

    function selectNumberAndRow(number,index){

        const zero = [0,1,1,1,1,1,0];
        const one = [3,3,3,3,3,3,3];
        const two = [0,3,3,0,2,2,0];
        const three = [0,3,3,0,3,3,0];
        const four = [1,1,1,0,3,3,3];
        const five = [0,2,2,0,3,3,0];
        const six = [0,2,2,0,1,1,0];
        const seven = [0,3,3,3,3,3,3];
        const eight = [0,1,1,0,1,1,0];
        const nine = [0,1,1,0,3,3,0];

        switch (number) {
            case 0:
                return zero[index];
            case 1:
                return one[index];
            case 2:
                return two[index];
            case 3:
                return three[index];
            case 4:
                return four[index];
            case 5:
                return five[index];
            case 6:
                return six[index];
            case 7:
                return seven[index];
            case 8:
                return eight[index];
            case 9:
                return nine[index];
        }

    }

    let copyTime = time.slice(0,2).concat(time.slice(3));

    let arrTime = copyTime.split('').map(numero => parseInt(numero));

    let res = [];

    for(let i=0; i<7; i++){

        let line = [];
        
        for(let j=0; j<arrTime.length; j++){

            if(j===2){
                if(i===2||i===4){
                    line.push(ESPACE);
                    line.push(ASTERISK);
                }else{
                    line.push(ESPACE);
                    line.push(ESPACE);
                }
            }

            if(j>=1){

                line.push(ESPACE);
                line.push(grupos[selectNumberAndRow(arrTime[j],i)])

            }else{

                line.push(grupos[selectNumberAndRow(arrTime[j],i)])

            }

        }

        res.push(line.flat());

    }

    return res;
}

drawClock('01:30');