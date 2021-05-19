const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    const newDrivers = [...drivers]
    return newDrivers.slice(0,2)
}

function returnLastTwoDrivers() {
    const newDrivers2 = [...drivers]
    return newDrivers2.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = function(integer) {
    return totalFarePrice => totalFarePrice * integer
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare2) {
    return fare2 * 3;
}

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray)
}


