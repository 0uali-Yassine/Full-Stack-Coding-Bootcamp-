const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// 2
console.log("Number of floors:", building.numberOfFloors);

// 3 
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 4 
const secondTenant = building.nameOfTenants[1]; // "Dan"
const roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0]; // 4 rooms
console.log(`The second tenant is ${secondTenant} and has ${roomsOfSecondTenant} rooms.`);

// 5
const sarahRent = building.numberOfRoomsAndRent.sarah[1]; // 990
const davidRent = building.numberOfRoomsAndRent.david[1]; // 500
const danRent = building.numberOfRoomsAndRent.dan[1]; // 1000

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
} else {
    console.log("No change in Dan rent.");
}

console.log("Updated:", building.numberOfRoomsAndRent);
