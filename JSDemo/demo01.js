//JS basic:  Language Preferences

var assert = require("assert");   //for unit testing

"use strict" //avoid globlization

assert.equal(2, 5 - "3");   //(expected value, actual value)
assert.ok(1);


//test false value
assert.ok(!false);
assert.ok(!0);
assert.ok(!undefined);
assert.ok(!null);
assert.ok(!'');
assert.ok(!NaN);

assert.equal(0,false);
assert.equal(0,'');
assert.equal('',false);
assert.equal(null,undefined);
assert.ok(!(NaN==NaN));
assert.ok(isNaN(5 - "a"));

//Difference between null and undefined
assert.equal(5, 5+null);
assert.ok(isNaN(5+undefined));
var x;
assert.equal(undefined,x);


/////////////////////////////////////////////////////////////////////////
//Local variable and global variable
(function(){               //Self-Invoking function
    var a = b = 3;            // a is a local variable, b is global variable
})();

assert.equal(3,b);
assert.ok(typeof a === "undefined");  //verify whether a variable is defined
//console.log(a);     //a is not defined


//About function
function avg() {                  // a function with no parameter and use arguments to get all parameters
    var sum =0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

assert.equal(5, avg(1,5,9));



var factorial = function(n) {     //Anonymous recursive function
    if (n==0) return 1;
    return n * arguments.callee(n-1);
};
assert.equal(3628800, factorial(10));


//hoisting Feature: JS does not have block scope
// Note: In ES6, it defines let and const keywords to specify block scopes.
(function(){

    assert.equal(undefined, i);
    assert.equal(undefined, j);
    for(var i=0; i<10;i++){
        //do something
        for(var j=0;j<5;j++){
            //do something
        }
    }

    assert.equal(10, i);
    assert.equal(5, j);
})();


//Compare == and ===
assert.ok(5 == "5");             //== compare value
assert.ok(!(5 === "5"));        //=== compare type and value
var obj1 = {name: "Bob"};
var obj2 = {name: "Bob"};
assert.ok(!(obj1==obj2));
assert.ok(!(obj1===obj2));         //For objects, both == and === compare references


//hoisting Features for functions
(function() { 
    assert.equal("f", f());
    function f(){
        return "f";
    }

    assert.ok(typeof g === "undefined");
    var g = function(){
        return "g";
    };
    assert.equal("g", g());
})();
