// Exercise 3 : JSON Mario

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

const convrtToJsonMarioGame = JSON.stringify(marioGame);
console.log(convrtToJsonMarioGame);
//What happens to the nested objects?
// All nested objects "characters, mario, bowser, princessPeach" are presrvd in the JSON structure.

const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMarioGame);
