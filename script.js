// Bubble sort function
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    
    for (let i = 0; i < len; i++) {

      swapped = false;

      for (let j = 0; j < len - i - 1; j++) {


        if (arr[j] > arr[j + 1]) {

          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;

        }

      }
      // If no elements were swapped, the array is sorted
      if (!swapped) break;
    }
    return arr;
  }
  
  // Function to trigger sorting when user clicks the button
  function sortArray() {
    // Get the input value
    const input = document.getElementById('inputArray').value;
    
    // Parse the input into an array of numbers
    const unsortedArray = input.split(',').map(num => parseInt(num.trim(), 10));
  
    // Display the unsorted array
    document.getElementById('unsortedArray').textContent = JSON.stringify(unsortedArray);
    
    // Sort the array using bubble sort
    const sortedArray = bubbleSort(unsortedArray);
  
    // Display the sorted array
    document.getElementById('sortedArray').textContent = JSON.stringify(sortedArray);
  }