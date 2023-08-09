const person = {
  firstName: 'Ross',
  lastName: 'Brewster',
  hobby: 'Rock Climing',
};

console.log('person:', person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'AirBnb Host';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Skydiver';
console.log("The person's previous job was:", person['previousJob']);

console.log('The complete person object:', person);
