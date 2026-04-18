// ===== Step 2: Variables (var → let / const) =====

const fname = "Cleford";
const lname = "Carlos";

let age = 18;
age = 20; // updated value


// ===== Step 3: Arrow Functions =====

// greeting function
const greet = (first, last) => {
    return `Hello ${first} ${last}`;
};

// sum function
const add = (a, b) => a + b;


// ===== Step 4: Template Literals =====

console.log(`Full Name: ${fname} ${lname}`);
console.log(`Age: ${age}`);
console.log(greet(fname, lname));
console.log(`Sum: ${add(10, 5)}`);


// ===== Step 5: Modern ES6 Features =====

// 1. Destructuring
const student = {
    name: "Cleford Carlos",
    course: "BSIT",
    year: 2
};

const { name, course, year } = student;

console.log(`Student: ${name}`);
console.log(`Course: ${course}`);
console.log(`Year: ${year}`);


// 2. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log("Spread Array:", arr2);


// 3. Default Parameters
const multiply = (a = 1, b = 1) => {
    return a * b;
};

console.log("Multiply:", multiply(5, 3));
console.log("Default Multiply:", multiply());


// ===== End =====
console.log("ES6 Lab Completed Successfully!");