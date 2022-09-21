const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function (fare){
        return fare * 5
    }
}


const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, randomDriver){
    return randomDriver(drivers)
}

// function selectDifferentDrivers(drivers, driverPair){
//     selectDifferentDrivers
// }



// function selectDifferentDrivers(drivers, driverPair){
//     return driverPair(selectingDrivers)
// }