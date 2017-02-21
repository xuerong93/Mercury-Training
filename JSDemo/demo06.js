//JS prototype

var assert = require("assert");

/*
    Each object has a prototype and inherits all the properties from its prototype.
    The object prototype is also an object and thus has its own prototype. Thus we get a prototype chain until Object.prototype, whose prototype is null.
*/

function A(){
    this.value = 10;
    this.getValue = function(){
        return this.value;
    }
}
var a1 = new A();
var a2 = new A();
assert.equal(a1.value, a2.value);
assert.ok(!(a1.getValue == a2.getValue)); //function reference is not the same but getValue() is the same because the result is the same
console.log(Object.keys(a1));

function B(){
    this.value =10;
}
B.prototype.getValue = function(){
    return this.value;
}
var b1 = new B();
var b2 = new B();
assert.equal(b1.value, b2.value);
assert.ok(b1.getValue === b2.getValue);
console.log(Object.keys(b1));

//Prototype Chain starting from a1: a1 -> A.prototype -> Object.prototype ->null
//Prototype Chain starting from A: A -> Function.prototype -> Object.prototype -> null
assert.ok(Object.getPrototypeOf(a1) === A.prototype);
assert.ok(Object.getPrototypeOf(A.prototype) === Object.prototype);
assert.ok(Object.getPrototypeOf(Object.prototype) === null);

assert.ok(Object.getPrototypeOf(A) === Function.prototype);
assert.ok(Object.getPrototypeOf(Function.prototype) === Object.prototype);
assert.ok(Object.getPrototypeOf(Object.prototype) === null);


function Person(name){
    if (!(typeof name === "undefined")){
        this.name = name;
    }
    /*  ~~~  if(typeof name === "undefined"){
        this.name = "default";
    }else{
        this.name = name;
    }*/
}
Person.prototype.name = "default";
var p = new Person("Alice");
assert.equal("Alice", p.name);
var q = new Person();
assert.equal("default", q.name);
delete p.name;
// ~~~ assert.equal(undefined, p.name);
assert.equal("default", p.name);


//Inheritance    1____________not stable/security problem
function Parent(){
    this.name = "Parent";
}
Parent.prototype.hello = function(){
    return "Hello " + this.name;
}

function Child(){
    this.name = "Child";
}

var parent = new Parent();
Child.prototype = parent;      //Make inheritance

var child = new Child();
//Prototype chain from child: child -> Child.prototype = parent -> Parent.prototype -> Object.prototype -> null
assert.equal("Child", child.name);
assert.equal("Hello Child", child.hello());
assert.ok(child instanceof Child);
assert.ok(child instanceof Parent);
delete child.name;
assert.equal("Parent", child.name);
assert.equal("Hello Parent", child.hello())


// 2________
function Base(){
    this.value = 100;
}
function Sub(){
    //  @ Base.call(this);
}

assert.ok(Sub.prototype.constructor === Sub);
Sub.prototype = Object.create(Base.prototype); // make inheritance of sub.prototype and base.prototype
assert.ok(Sub.prototype.constructor === Base);
Sub.prototype.constructor = Sub;

var sub = new Sub();
// Prototype Chain from sub: sub ->Sub.prototype -> Base.prototype -> Object.prototype -> null
assert.ok(sub instanceof Sub);
assert.ok(sub instanceof Base);
assert.equal(undefined, sub.value);
//  @ assert.equal(100, sub.value);


//Internal process of Object.create
function myCreate(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}

function P(){}
function Q(){}
Q.prototype = myCreate(P.prototype);
Q.prototype.constructor = Q;

var q = new Q();
//Prototype chain from q: q-> Q.prototype = new F() -> F.prototype = P.prototype -> Object.prototype -> null
assert.ok(q instanceof P);
