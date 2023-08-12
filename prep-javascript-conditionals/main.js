const age = 26;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log('Adult status:', isAdult(age));

const student1Score = 42;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log('Passing status:', didStudentPass(student1Score));

const student2Score = 103;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log('Letter Grade:', gradeCalculator(student2Score));

const season = 'Summer';
function seasonMessenger(season) {
  if (season === 'Summer') {
    return "It's hot today!";
  } else if (season === 'Spring') {
    return 'The flowers are blooming!';
  } else if (season === 'Autumn') {
    return 'The Leaves are changing colors!';
  } else if (season === 'Winter') {
    return "It's cold today!";
  } else {
    return 'Please enter a valid season.';
  }
}
console.log('Seasonal Message:', seasonMessenger(season));

const dayOfTheWeek = 'thursday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'Have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}
console.log('Week-day or Weekend:', dayDetector(dayOfTheWeek));
