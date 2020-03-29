const bubbleSort = function(numbers) 
{
  const length = numbers.length;

  for (let loop = 0; loop < length; loop++)
  {
    for(let position = 0; position <length; position++)
    {
      if(numbers[position] > numbers[position + 1])
      {
        // Swap if the current position is greater than the next position

        const smallerNumber = numbers[position + 1];
        numbers[position + 1] = numbers [position];
        numbers[position] = smallerNumber;
      }
    }
  }

  return numbers
}

// Testing

let testArray = [420, 4, 69, 23, 42];

console.log("The array after being sorted is: ", bubbleSort(testArray));