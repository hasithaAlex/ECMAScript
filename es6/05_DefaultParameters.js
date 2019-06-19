let Func = (a, b = 10) => {
    return a + b; 
}
console.log(Func(20)); // 20 + 10 = 30
////////////////////////////////////////////////////////////////////////////////////////////
//When you are calling the function with parameters they get assigned in the order.       //
//(i.e) the first value gets assigned to the first parameter and the second value gets    //
//assign to the second parameter and so on..                                              //
//In the above example, the value 20 gets assigned to parameter ‘a’ and ‘b’ is not having //
////////////////////////////////////////////////////////////////////////////////////////////
//any value. So we are not getting any output.
let NotWorkingFunction = (a = 10, b) => {
    return a + b;
}
console.log(NotWorkingFunction(20)); // NAN. Not gonna work.
console.log(NotWorkingFunction(20, 30)); // 50;

