const x = 0.5;
const e = 0.001; // Precision threshold
let sum = Math.sin(x); // Start with sin(x)
let term = Math.sin(x); // First term
let n = 1;

while (Math.abs(sum) >= e) {
    // Ensure sum itself becomes < 0.001
    term *= Math.sin(x) / n; // Compute next term
    sum += ((n % 2 === 0 ? 1 : -1) * term) / (n + 1); // Alternating sum
    n += 1;
}

console.log('Final Sum:', sum);
