//This example finds the sum of all numbers in an array:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(function myFunction(total, value) {
    return total + value;
});
console.log(sum);
