// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};

// Change a Property:
Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
});

for (var x in person) {
    console.log(person[x]);
}

console.log("==============except it hides the language property from enumeration===============");

// Create an Object:
var person2 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};
  
// Change a Property:
Object.defineProperty(person2, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
});

for (var x in person2) {
    console.log(person2[x]);
}


console.log("============creates a setter and a getter to secure upper case updates of language:=======");
/// Create an Object:
var person3 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO"
};
  
  // Change a Property:
Object.defineProperty(person3, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
});
  
  // Change Language
person3.language = "en";
for (var x in person3) {
    console.log(person3[x]);
}