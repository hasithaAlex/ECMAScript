//The JSON.stringify() method converts JavaScript objects into strings.
//When sending data to a web server the data has to be a string.

var obj = {"name":"John", "age":30, "city":"New York"};
console.log(JSON.stringify(obj));