//This example creates a new array from elements with a value larger than 18:
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(function myFunction(value) {
    return value > 18;
  });
console.log(over18);


