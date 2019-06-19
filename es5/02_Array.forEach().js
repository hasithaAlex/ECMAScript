//The forEach() method calls a function once for each array element.
var numbers = [45, 4, 9, 16, 25];


numbers.forEach(function myFunction(value) {
    console.log(value); 
});


//above same thing
numbers.forEach(myFunction);
function myFunction(value) {
    console.log("myfunction :"+value); 
}

