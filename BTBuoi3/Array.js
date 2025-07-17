const numbers = [3, -1, 4, 0, -7, 10];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Cac so chan:", evenNumbers);


const max = Math.max(...numbers);
console.log("So lon nhat:", max);

const positiveNumbers = numbers.filter(n => n > 0);
console.log("So lon hon 0:", positiveNumbers);
