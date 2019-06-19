// Old Syntax
function oldOne() {
    console.log("Hello Old World..!");
}
// New Syntax
var newOne = () => {
    console.log("Hello New World..!");
}

oldOne();
newOne();

var newOne = name => {
    console.log("Hello "+name+"!");
}

newOne("hasitha");