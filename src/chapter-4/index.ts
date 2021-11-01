function add(a: number, b: number) {
  return a + b;
}

console.log(add(4, 5));

// Names function
function greet(name: string) {
  return "hello " + name;
}

console.log(greet("greet"));

// Function expression
const greet2 = function (name: string) {
  return "hello " + name;
};

console.log(greet2("greet2"));

// Arrow function expression
const greet3 = (name: string) => {
  return "hello " + name;
};

console.log(greet3("greet3"));

// Shorthand arrow function expression
const greet4 = (name: string) => "hello " + name;

console.log(greet4("greet4"));

// Function constructor
const greet5 = new Function("name", 'return "hello " + name');

console.log(greet5("greet5"));

function log(message: string, userId?: string) {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}

log("Page loaded");
log("User signed in", "da763be");

function log2(message: string, userId = "Not signed in") {
  const time = new Date().toISOString();
  console.log(time, message, userId);
}

log2("User clicked on a button", "da763be");
log2("User signed out");

function sum(numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum([1, 2, 3]));

function sum2(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum2(1, 2, 3));
