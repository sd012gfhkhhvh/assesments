interface Trip {
    start: string;
    end: string;
}

interface Shipment {
    pickups: string[];
    dropoffs: string[];
}

function isValidShipment(trips: Trip[], shipment: Shipment, viaPoints: string[]): boolean {

    const tripsContainer: Map<string, string> = new Map();

    trips.forEach(trip => {

        // check the validity of the trip and
        // check if trip has started from pickup point and end at viapoint
        if(shipment.pickups.includes(trip.start) && viaPoints.includes(trip.end)){
            //check for repeated pickup points
            if(!tripsContainer.has(trip.start)){
                tripsContainer.set(trip.start, trip.end) // add to the map
            }
            else {
                return false; // return false if a pickup point is used more than once 
            }
        }
        // check if trip has started from viapoint and end at dropoff point
        else if(viaPoints.includes(trip.start) && shipment.dropoffs.includes(trip.end)){

            //get the corrosponding pickup point of the dropoff point
            const indexOfDropoffPoint = shipment.dropoffs.indexOf(trip.end)
            const correspondingPickupPoint = shipment.pickups[indexOfDropoffPoint];
            
            // ensuring that each pick-up point is visited before its corresponding drop point.
            if(tripsContainer.has(correspondingPickupPoint) && tripsContainer.get(correspondingPickupPoint) === trip.start){
                tripsContainer.set(correspondingPickupPoint, "completed");
            }
            else{
                return false; // return if there is no corrosponding pickup point w.r.t the deopoff point
            }
        }
        else {
            return false; //return false if the trip is invalid
        }
    })

    for (let [key, value] of tripsContainer) {
        if(value !== "completed") return false;
    }

    return true;
}

// Example usage:
const shipment: Shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
};

//valid
const trips1: Trip[] = [
    { start: 'A', end: 'X' },
    { start: 'B', end: 'X' },
    { start: 'X', end: 'C' },
    { start: 'X', end: 'D' }
];

//valid
const trips2: Trip[] = [
    { start: 'A', end: 'Y' },
    { start: 'B', end: 'X' },
    { start: 'Y', end: 'C' },
    { start: 'X', end: 'D' }
];

//Invalid
const trips3: Trip[] = [
    { start: 'A', end: 'X' },
    { start: 'B', end: 'X' },
    { start: 'Y', end: 'C' },
    { start: 'X', end: 'D' }
];

const viaPoints: string[] = ['X', 'Y'];

console.log("Is the shipment valid?", isValidShipment(trips1, shipment, viaPoints)); // true
console.log("Is the shipment valid?", isValidShipment(trips2, shipment, viaPoints)); // true
console.log("Is the shipment valid?", isValidShipment(trips3, shipment, viaPoints)); // false
