function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResults = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

function getGreeting(name) {
  return 'Hello ' + name;
}
const greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Ross', 'Brewster');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number ** 3;
}
const cubeResults = cube(5);
console.log('cube Exercise:', cubeResults);
