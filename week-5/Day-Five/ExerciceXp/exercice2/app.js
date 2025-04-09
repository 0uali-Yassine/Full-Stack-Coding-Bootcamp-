import people from './data.js';

function calculateAverageAge(peopleArray) {
  if (peopleArray.length === 0) return "No people in  people array";

  const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / peopleArray.length;

  console.log(`Average Age: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(people);
