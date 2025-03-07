// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    // Loop through all array elements
    do {
      swapped = false;
  
      // Loop through the array and compare each pair of adjacent elements
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap the elements
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
  
          swapped = true;
        }
      }
      n--; // Reduce the range of comparison after each pass
    } while (swapped);
  
    return arr;
  }
  
  // Sample array to be sorted
  const numbers = [5, 3, 8, 4, 2];
  console.log("Original array:", numbers);
  const sortedArray = bubbleSort(numbers);
  console.log("Sorted array:", sortedArray);
  