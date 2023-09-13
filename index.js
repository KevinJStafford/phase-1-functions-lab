// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    const headquarters = 42
    if (pickUpLocation < 42) {
        return headquarters - pickUpLocation
    } else {
    return pickUpLocation - headquarters
    }
}

function distanceFromHqInFeet(pickUpBlock) {
    let numberOfFeet = distanceFromHqInBlocks(pickUpBlock) * 264
    return numberOfFeet
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let farePrice 
    if (distance <= 400) {
        let farePrice = distance * 0
        return farePrice
    } else if (distance <= 2000) {
        let farePrice = (distance - 400) * 0.02
        return farePrice
    } else if (distance < 2500) {
        let farePrice = 25
        return farePrice
    } else {
        return 'cannot travel that far'
    }
}