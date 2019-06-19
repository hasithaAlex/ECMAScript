//Map holds key-value pairs. It’s similar to an array but we can define our own index. 
//And indexes are unique in maps.
var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);

console.log(NewMap.get('name')); // John
console.log(NewMap.get('id'));  // 2345796
console.log(NewMap.get('interest'));  // ['js', 'ruby', 'python']

console.log("===============================================");
console.log(NewMap.size); // 2. Returns the size of the map.
console.log(NewMap.keys()); // outputs only the keys. 
console.log(NewMap.values()); // outputs only the values.

console.log("===============================================");
for (let key of NewMap.keys()) {
    console.log(key);
}
for (let key of NewMap.values()) {
    console.log(key);
}