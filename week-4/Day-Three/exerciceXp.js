// Exercise 1 : Location

//the output will be 
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver,Canada. Latitude((49.2827), Longitude(-123.1207)


// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    const {first,last} = objUser;
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
