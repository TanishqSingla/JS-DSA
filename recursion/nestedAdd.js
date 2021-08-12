function nestedAdd(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }

  return sum;
}

// test
console.log(nestedAdd([1, 2, 3, [1, 2], [2, [1, 3]]]) === 15);
