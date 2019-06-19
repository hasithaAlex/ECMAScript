//This example checks if all values are over 18:

var numbers = [52, 42, 92, 161, 22];

var allOver18 = numbers.every(function myFunction(value) {
    return value > 18;
  });
console.log(allOver18);