//JS  prototype continued
var assert = require("assert");

//Inheritence between objects          3_____________
var x = {
    name : "X"
};
var y = {}
y.__proto__ = x;
//Prototype chain: y -> x -> Object.prototype -> null
assert.equal("X", y.name);

function A() {}
//prototype chanin: A -> Function.prototype -> Object.prototype -> null
assert.ok(Function.prototype.isPrototypeOf(A));
assert.ok(A.__proto__ === Function.prototype);
//assert.ok(A.prototype !== Function.prototype);

var str = "abc";
assert.ok(str.__proto__ === String.prototype);


//An example
function Shape(){
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function(x,y){
    this.x = x;
    this.y = y;
}

function Rectangle(){}
Rectangle.prototype = Object.create(Shape.prototype);  //Rectangle.prototype -> Shape.prototype
Rectangle.prototype.constructor = Rectangle;  //must make pair of the above line

var rect = new Rectangle();// rect -> Rectangle.prototype
assert.ok(rect instanceof Shape);
assert.equal(undefined, rect.x);
assert.equal(undefined, rect.y);
rect.move(10,20);
assert.equal(10, rect.x);
assert.equal(20, rect.y);


function Triangle(){
    Shape.call(this);   //let traingle function access x and y
}
Triangle.prototype = Object.create(Shape.prototype); // Triangle.prototype -> Shape.prototype
Triangle.prototype.constructor = Triangle;

var tri = new Triangle();    // tri -> Traingle.prototype
assert.ok(tri instanceof Shape);
assert.equal(0, tri.x);
assert.equal(0, tri.y);
tri.move(5,8);
assert.equal(5, tri.x);
assert.equal(8, tri.y);


//What if a constructor returns a value
function P(){
    this.value = 100;
    return 100;
}
var p = new P();   //ignore return value 100, ignore primitive return 
assert.equal(100, p.value);   
assert.ok(p instanceof P);


function Q(){
    this.value = 100;
    return {value: 200};
}
var q = new Q();   // q is still an object of the returning object
assert.equal(200, q.value);
assert.ok(!(q instanceof Q));


function R(){
    this.value = 100;
    return this;
}
var r = new R();    // be careful of var r=R(),  returning thing is global scope
assert.equal(100, r.value);
assert.ok(r instanceof R);
