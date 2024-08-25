// Exercise 1 

// This function takes an array of many numbers as input
// Because this is a test, i tried to be specific in the comments 

function getEvenNumbers(numbersArray) {
    // Create a new array to save the even numbers
    let evenNumbers = [];
    
    // Loop through each number in the input array
    for(let i = 0; i < numbersArray.length; i++) {
        // Check if the number is even (divisible by 2 with no rest)
        if(numbersArray[i] % 2 === 0) {
            // If the number is even, it adds it to the evenNumbers array
            evenNumbers.push(numbersArray[i]);
        }
    }
    // Return the array containing only the even numbers
    return evenNumbers;
}

// Example using the function :
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(Numbers);
console.log(evenNumbers);  // Output should be: [2, 4, 6, 8, 10]
