class ParkingLot {
    constructor(numberOfSlots) {
        this.numberOfSlots = numberOfSlots;
        this.parking = Array(numberOfSlots).fill(null);
    }

    park(carId) {
        if (this.parking.includes(carId)) {
            return false;
        } else {
            const firstNullIndex = this.parking.indexOf(null);
            if (this.parking[firstNullIndex] === null) {
                this.parking[firstNullIndex] = carId;
                return true;
            } else {
                return false;
            }
        }
    }

    remove(carId) {
        if (this.parking.includes(carId)) {
            const parkedCarIndex = this.parking.indexOf(carId);
            this.parking[parkedCarIndex] = null;
            return true;
        } else {
            return false;
        }
    }

    getSlots() {
        return this.parking;
    }
}

function main() {    
    const numberOfSlots = 5;
    const parkingLotObj = new ParkingLot(numberOfSlots);
    console.log(`Parking Lot created with number of slots as ${numberOfSlots}\n`);
    
    let numberOfOperations = 6;
    while (numberOfOperations-- > 0) {
        const temp = 'Park Car-10';
        const inputs = temp.split(' ');
        const operation = inputs[0];
        const carId = inputs[1];

        switch(operation) {
            case 'Park':
                if (parkingLotObj.park(carId)) {
                    console.log(`Parking Started: ${carId}\n`);
                } else {
                    console.log(`Parking Full: ${carId}\n`);
                }
                break;
            case 'Remove':
                if (parkingLotObj.remove(carId)) {
                    console.log(`Car id ${carId} removed from parking\n`);
                } else {
                    console.log(`Car: ${carId} not found\n`);
                }
                break;
            case 'GetSlots':
                const status = parkingLotObj.getSlots();
                status.forEach((obj, i) => {
                    if (obj) {
                        console.log(`Parked at slot ${i + 1}: ${obj}\n`);
                    } else {
                        console.log(`Slot ${i + 1} is empty\n`);
                    }
                })
                break;
            default:
                break;
        }
    }
}

const parkingLotObj = new ParkingLot(5);
console.log(parkingLotObj.park('carId'));
console.log(parkingLotObj.remove('carId'));