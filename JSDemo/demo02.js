// JS Data types

var assert = require("assert");


//Keyword: typeof
//Totally 6 types: string, boolean, object, function, number, undefined
//in ES6, it introduced the 7th data type: "symbol"(primitive types)
assert.ok(typeof "abc" === "string");
assert.ok(typeof true === "boolean");
assert.ok(typeof 100 === "number");
assert.ok(typeof undefined === "undefined");
assert.ok(typeof null === "object");
assert.ok(typeof function() {} === "function");
assert.ok(typeof [] === "object");
assert.ok(typeof new String("abc") === "object");   //anything created by "new" keyword is an object
//String must be a function, not a class


//5 Primitive types: string, number, boolean, undefined, null(they are immutable)
var s1 = "abc";                //primitive
var s2 = new String("abc");   //object

assert.ok(s1==s2);
assert.ok(!(s1===s2));
s1.x = 100;
assert.equal(undefined, s1.x);
s2.x = 100;
assert.equal(100, s2.x);


///research on Object function
var a = Object(100);    /// is the parameter is primitive value, then it returns an object that contains the value
assert.ok(a==100);
assert.ok(!(a===100));
assert.ok(typeof a==="object");

var obj = {name: "Alice"};     
var b = Object(obj);        // is the parameter is an object, then it returns this object itself
assert.ok(b == obj);


//Test Whether a variable is a real object or primitive
function isObject(o) {
    return o === Object(o);
}

assert.ok(!isObject("abc"));
assert.ok(!isObject(200));
assert.ok(!isObject(true));
assert.ok(!isObject(undefined));
assert.ok(!isObject(null));            //null is not an object
assert.ok(isObject(new Array()));
assert.ok(isObject(function(){}));
assert.ok(isObject(new String("abc")));
assert.ok(isObject({}));


