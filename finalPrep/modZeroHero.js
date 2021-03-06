// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = " ";
var specialAbility = " ";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = " " + heroName;
var catchphrase = "We have ${specialAbility}";
// Declare two variables - power AND energy - set to integers
var power = 1;
var energy = 2;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = 1 * 500;
var fullEnergy = 2 + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Enemy1", "Enemy2", "Enemy3"];
var sidekicks = ["Sidekick1", "Sidekick2", "Sidekick3"];

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
var moreArchEnemies = archEnemies.push("Enemy4");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
varRemoveSidekick = sidekicks.shift()
// Print the sidekicks array to console to ensure you added a new sidekick
var addSidekick = sidekicks.push("Sidekick4");
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  var dangerLever = 10;
  var saveTheDay = "Mission Accomplished";
  var badExcuse = "This is dangerous";

if (dangerLevel > 50) {
  console.log("This is dangerous");
} else if (dangerLevel === 11 && dangerLevel < 50) {
  console.log("Mission Accomplished");
} else if (dangerLevel < 10) {
  console.log("Meh. Hard pass");
}
}
assessSituation(2);
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
//break break break
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: " ";
  smell: " like apple"
  weight: 105;
  citiesDestroyed: ["Troy", "Bronco"];
  luckyNumbers: [2, 3, 6];
  address = {
    number: 6;
    street: "Peter";
    state: "Florida";
    zip: 32845;
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
class Superhero {
  constructor(name, superpower, age)
}
// - Your class should have the following STATIC values
//   archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
this.archNemesis = "The Syntax Error";
this.powerLevel = 100;
this.energyLevel = 50;

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000 // how to do that?
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number // how to do that?
sayName() {
  console.log(${name}); // how to do this?
}
// - Create 2 instances of your SuperHero class
var Batman = new SuperHero();
//break
var Superman = new SuperHero();

// Reflection
// What parts were most difficult about this exerise?
The functions and the looping parts. I have to study the concepts again and then I will go back to this exercise.

// What parts felt most comfortable to you?
- There are familiar concepts already but I need to study more before Mod 1.
// What skills do you need to continue to practice before starting Mod 1?
- I need time to study the concepts again before Mod 1.
