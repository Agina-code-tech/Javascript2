/*1. Reverse a String*/
function reverseString(str) {
  return str.split('').reverse().join('');
}

/*2. Count Characters*/
function countCharacters(str) {
  return str.length;
}

/*3. Capitalize Words*/
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/* ARRAY FUNCTIONS*/
/*4. Find Maximum and Minimum*/
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

/*5. Sum of Array*/
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/*6. Filter Array (based on condition)*/
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

const numbers = [1, 2, 3, 4, 5];

// keep only even numbers
console.log(filterArray(numbers, (num) => num % 2 === 0));

//7. Factorial
function factorial(n) {
  if (n < 0) return 'Not defined';
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

/*8. Prime Number Check*/
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

/*9. Fibonacci Sequence*/
function fibonacci(n) {
  const sequence = [];

  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}
console.log(reverseString('hello'));
console.log(countCharacters('hello world'));
console.log(capitalizeWords('hello world from javascript'));

console.log(findMax([1, 5, 3, 9]));
console.log(findMin([1, 5, 3, 9]));
console.log(sumArray([1, 2, 3, 4]));

console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(10));
