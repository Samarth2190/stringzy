import { isEmail, capitalize } from "./dist/index.js";

console.log(isEmail("hello@gmail.com")); // true
console.log(isEmail("invalid-email"));   // false

console.log(capitalize("shakshi yadav")); // Shakshi yadav
console.log(capitalize("hacktoberfest")); // Hacktoberfest
