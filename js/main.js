const randomString = "abc123def456ghi789";
const numbers = randomString.match(/\d+/g);
const squaredValues = numbers.map((num) => Math.pow(parseInt(num), 2));

console.log(squaredValues);
