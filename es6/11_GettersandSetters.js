//Getters and setters and one of the useful feature introduced in ES6. 
//It will come in handy if you are using classes in JS.
class People {
    constructor(name) {
      this.name = name;
    }
    get Name() {
      return this.name;
    }
    set Name(name) {
      this.name = name;
    }
}
let person = new People("Jon Snow");
console.log(person.getName());
person.setName("Dany");
console.log(person.getName());