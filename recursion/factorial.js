function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// tests
console.log(factorial(0) == 1);
console.log(factorial(2) == 2);
console.log(factorial(5) == 120);
