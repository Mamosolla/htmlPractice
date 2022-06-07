/*let js = "amazing";

if (js === "amazing") alert("Javascript is fun");

sum = 40 + 8 + 23 - 10;
console.log(sum);
console.log("Jonas");

let javascriptIsFun = true;

console.log(typeof javascriptIsFun);

console.log(myAge);

let myAge = 17;*/

const johnMass_1 = 92; //kg
const johnHeight_1 = 1.95; //mitres

const johnMass_2 = 85; //kg
const johnHeight_2 = 1.76; //mitres

const markMass_1 = 78; //kg
const markHeight_1 = 1.69; //mitres
const markMass_2 = 95; //kg
const markHeight_2 = 1.88; //mitres

const johnBMI_1 = johnMass_1 / johnHeight_1 ** 2;
const johnBMI_2 = johnMass_2 / johnHeight_2 ** 2;

const markBMI_1 = markMass_1 / markHeight_1 ** 2;
const markBMI_2 = markMass_2 / markHeight_2 ** 2;

const markHigherBMI_1 = markBMI_1 > johnBMI_1;
const markHigherBMI_2 = markBMI_2 > johnBMI_2;

console.log(johnBMI_1, markBMI_1, markHigherBMI_1);
console.log(johnBMI_2, markBMI_2, markHigherBMI_2, "🦷");

if (markHigherBMI_2 === true) {
  console.log(
    `Mark BMI is larger than John's BMI. Mark's BMI is (${markBMI_1}) and John's BMI is (${johnBMI_1})!`
  );
} else {
  console.log(
    `Mark BMI is not larger than John's BMI. Mark's BMI is (${markBMI_1}) and John's BMI is (${johnBMI_1})!`
  );
}

// const person_name = prompt("What's your name: ");
// console.log(person_name);

// const personAge = Number(prompt("Please enter your age: "));
