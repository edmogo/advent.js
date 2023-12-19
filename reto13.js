function calculateTime(deliveries) {
    
    function getArrayTime(time) {

        const secondsToDivide = [3600,60,1];

        let copyTime = time;
        let arr = [];

        for(let i=0; i<secondsToDivide.length; i++){

            let tmp = Math.floor(copyTime/secondsToDivide[i]);
            copyTime = copyTime%secondsToDivide[i];

            if(tmp < 10){
                arr.push(`0${tmp}`);
            }else{
                arr.push(`${tmp}`);
            }

        }

        return arr;

    }

    // 7 horas -> 25200 segundos

    let timeLeft = 25200;

    deliveries.forEach(element => {
       
        const elapsedTime = element.split(':').map( Number );
       
        let wastedSeconds = (elapsedTime[0] * 3600) + (elapsedTime[1] * 60) + elapsedTime[2];

        timeLeft = timeLeft - wastedSeconds;

    });

    let res = '';

    if(timeLeft > 0){
        res += '-';
    }

    timeLeft = Math.abs(timeLeft);

    let arrTime = getArrayTime(timeLeft);

    res = res.concat(arrTime.join(':'))

    return res;

}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']));
console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']));
console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01']));