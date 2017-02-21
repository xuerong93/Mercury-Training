//Promise, no缩进
 var assert = require("assert");


// function f1() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             task1();
//             resolve(100);
//         });
//     });
// }

function task1() {
    console.log("Exexute Task1");
    return 100;
}
function task2() {
    console.log("Exexute Task2");
    return "abc";
}
function task3() {
    console.log("Exexute Task3");
    return "error";
}
function f1() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(task1());
        },100);
    });
}
function f2() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(task2());
        },50);
    });
}
function f3() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(task3());
        },300);
    });
}
var promise = f1();       //it is at pending status
promise.then(function(data){          //it is at fullfilled(resolved) status
    assert.equal(100,data);   //data is the result of resolve(task1())
    return f2();
}).then(function(data){
    assert.equal("abc",data);
    return f3();
}).then(function(data){
    console.log("Fulfilled " + data);  //state fullfill
},function(err){
    console.log(err);                  // state reject
    assert.equal("error", err);
});

//Promise has 3 status: pending, fullfilled(resolved), rejected

promise.then(function(data){
    console.log(data);
    assert.equal(100, data);         //for task1, can get the previous data, like data cache
});

// UI <-->Backend
// UI <-->DataService(Promise) <--> BackEnd
// Promise --> Deffered Object: is child object of promise

