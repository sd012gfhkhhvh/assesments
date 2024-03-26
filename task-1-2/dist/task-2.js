"use strict";
function isValidShipment(trips, shipment, viaPoints) {
    const tripsContainer = new Map();
    trips.forEach(trip => {
        // check the validity of the trip and
        // check if trip has started from pickup point and end at viapoint
        if (shipment.pickups.includes(trip.start) && viaPoints.includes(trip.end)) {
            //check for repeated pickup points
            if (!tripsContainer.has(trip.start)) {
                tripsContainer.set(trip.start, trip.end); // add to the map
            }
            else {
                return false; // return false if a pickup point is used more than once 
            }
        }
        // check if trip has started from viapoint and end at dropoff point
        else if (viaPoints.includes(trip.start) && shipment.dropoffs.includes(trip.end)) {
            //get the corrosponding pickup point of the dropoff point
            const indexOfDropoffPoint = shipment.dropoffs.indexOf(trip.end);
            const correspondingPickupPoint = shipment.pickups[indexOfDropoffPoint];
            // check if the tripContainer has the corrosponding pickup point as a key and the same viapoint
            if (tripsContainer.has(correspondingPickupPoint) && tripsContainer.get(correspondingPickupPoint) === trip.start) {
                tripsContainer.set(correspondingPickupPoint, "completed");
            }
            else {
                return false; // return if there is no corrosponding pickup point w.r.t the deopoff point
            }
        }
        else {
            return false; //return false if the trip is invalid
        }
    });
    for (let [key, value] of tripsContainer) {
        if (value !== "completed")
            return false;
    }
    return true;
}
// Example usage:
const shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
};
const trips = [
    { start: 'A', end: 'X' },
    { start: 'B', end: 'X' },
    { start: 'X', end: 'C' },
    { start: 'X', end: 'D' }
];
const viaPoints = ['X'];
console.log("Is the shipment valid?", isValidShipment(trips, shipment, viaPoints));
