//This example multiplies each array value by 2:
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(function myFunction(value) {
    return value * 2;
});

console.log(numbers2);