function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(array, secondArray) {
  const result = [];

  while ((array.length, secondArray.length)) {
    if (array[0] <= secondArray[0]) {
      result.push(array.shift());
    } else {
      result.push(secondArray.shift());
    }
  }

  return result.concat(array, secondArray);
}

// tests
console.log(mergeSort([1]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([4, 2, 3, 1]));
