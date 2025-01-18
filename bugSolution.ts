function combine(a: string, b: number): string {
  return a + b.toString(); // Explicit type conversion
}

let result = combine("hello", 5);
console.log(result); // Output: "hello5"

//Alternative solution using template literals for better readability
function combine2(a: string, b: number): string {
  return `${a}${b}`;
}

let result2 = combine2("hello", 5);
console.log(result2); // Output: "hello5"