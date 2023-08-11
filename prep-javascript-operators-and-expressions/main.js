const number1 = 10;
const number2 = 2;
const product = number1 * number2;
console.log('product:', product);
console.log('product:', typeof product);

const charge = 30;
const payment = 15;
const amountRemaining = charge - payment;
console.log('amountRemaining:', amountRemaining);
console.log('amountRemaining:', typeof amountRemaining);

const tests = 70;
const assignments = 80;
const final = 90;
const grade = (tests + assignments + final) / 3;
console.log('grade:', grade);
console.log('grade:', typeof grade);

const firstName = 'Ross';
const lastName = 'Brewster';
const fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('fullname:', typeof fullName);

const pH = 3;
const isAcidic = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('isAcidic:', typeof isAcidic);

const numberOfSoldiers = 3000;
const isSparta = numberOfSoldiers === 300;
console.log('isSparta:', isSparta);
console.log('isSparta:', typeof isSparta);

let nickname = fullName;
nickname += ' ' + 'is the GOAT';
console.log('nickname:', nickname);
console.log('nickname:', typeof nickname);
