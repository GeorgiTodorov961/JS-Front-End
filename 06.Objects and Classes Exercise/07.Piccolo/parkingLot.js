function parkingLot(input) {
    let carsInParkingLot = [];
    for(const line of input){
        let [command, carNumber] = line.split(', ');
        if(command === 'IN'){
            carsInParkingLot.push(carNumber);
        }else{
            let indexForRemove = carsInParkingLot.indexOf(carNumber);
            carsInParkingLot.splice(indexForRemove, 1);
        }
    }
    let sortedCarNumbers = carsInParkingLot.sort((carA, carB) => carA.localeCompare(carB));


    if(sortedCarNumbers.length === 0){
        console.log('Parking Lot is Empty')
    }else{
        sortedCarNumbers.forEach((carNum) => {
            console.log(carNum)
        });
    }
}


parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])