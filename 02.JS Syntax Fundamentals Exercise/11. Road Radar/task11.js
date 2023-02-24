function roadRadar(speed, place){
    let difference = 0;
    let status = '';
    let speedLimit = 0;
    switch (place){
        case 'motorway':
            speedLimit = 130;
            if (speed > speedLimit){
                difference = speed - speedLimit;
                if (difference <= 20){
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else{
                    status = 'reckless driving'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                }
                } else{
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
                }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed > speedLimit){
                difference = speed - speedLimit;
                if (difference <= 20){
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else{
                    status = 'reckless driving'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } 
                } else {
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
                }
            break;
        case 'city':
            speedLimit = 50;
            if (speed > speedLimit){
                difference = speed - speedLimit;
                if (difference <= 20){
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else{
                    status = 'reckless driving'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } 
                } else {
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
                }
            break;
        default:
            speedLimit = 20;
            if (speed > speedLimit){
                difference = speed - speedLimit;
                if (difference <= 20){
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } else{
                    status = 'reckless driving'
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
                } 
                } else {
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
                }
    }
}


roadRadar(15, 'abs')