// bubble-sort.js

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
            }
        }
    }
    return arr;
}

// Example input and output
const numbers = [5, 6, 1, 3, 4, 2];
console.log('Sorted array:', bubbleSort(numbers));
