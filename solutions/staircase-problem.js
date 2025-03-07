// staircase-problem.js

function generateStaircase(steps) {
    for (let i = 1; i <= steps; i++) {
        console.log('#'.repeat(i));
    }
}

// Example input and output
const steps = parseInt(prompt('Enter the number of steps: '), 10);

if (steps > 0) {
    generateStaircase(steps);
} else {
    console.log('Please enter a positive number for steps.');
}
