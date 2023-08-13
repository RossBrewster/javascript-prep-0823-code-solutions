function whileLoop1() {
  const loopyArray1 = [];
  let x = 0;
  while (loopyArray1.length < 10) {
    loopyArray1.push(x);
    x++;
  }
  return loopyArray1;
}
console.log(whileLoop1());

function whileLoop2() {
  const loopyArray = [];
  let x = 0;
  while (loopyArray.length < 10) {
    loopyArray.push(x);
    x += 2;
  }
  return loopyArray;
}
console.log(whileLoop2());

function forLoop1() {
  const loopyArray = [];
  for (let i = 0; i < 10; i++) {
    loopyArray.push(i);
  }
  return loopyArray;
}
console.log(forLoop1());

function forLoop2() {
  const message = 'Time till EXPLOSION ';
  for (let i = 100; i > 0; i--) {
    console.log(message + i);
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log(forInLoop2(object));
