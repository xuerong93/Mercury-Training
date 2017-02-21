//JS promise
var assert = require("assert");

//Callback function
setTimeout(function(){
    console.log("This is a callback funciton");
},10);
console.log("Normal code");

//Callback function is asynchronous executed

// //synchorous code          not effective,step by step
// int f(int x){
//     return x*2;
// }
// int y = f(10);
// print(y);          //20, only one output

// //asynchonous code           execute simultaneously
// int z=0;    //the third party
// void g(int x){
//     // ~~z=x*2;
//    !! new Thread (){
//         @override
//         public void run(){
//             z = x*2;
//         }
//     }.start();
// }
// g(10);
// print(z);            // ~~20?          !!0

// //GoF Pattern(23): Command Pattern: scalebility

//An example to show the disadvantage of callback function
function task1() {
    console.log("Exexute Task1");
}
function task2() {
    console.log("Exexute Task2");
}
function task3() {
    console.log("Exexute Task3");
}
setTimeout(function(){        //no error but not good. Callback hell
    task1();
    setTimeout(function(){
        task2();
        setTimeout(function(){
            task3();
        },300);
    },50);
},100);


