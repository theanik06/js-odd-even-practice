const evens = [];
const odds = [];

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    evens.push(i);
  } else {
    odds.push(i);
  }
}

console.log('Even numbers:', evens);
console.log('Odd numbers:', odds);
