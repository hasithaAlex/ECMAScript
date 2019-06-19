// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",

    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    get lang() {
        return this.language.toUpperCase();
    },
    set lang(value) {
        this.language = value;
    }
};
console.log(person.fullName); 
person.lang = "Sinhala"; 
console.log(person.lang);  