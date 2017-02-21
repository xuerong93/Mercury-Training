//Keyword this
var assert = require("assert");

//Use a function to simulate a class
function Vehicle(){
    this.price = 1000;  //this is not a local or global variable
}
var v = new Vehicle(); // v=this
assert.equal(1000,v.price);
assert.ok(typeof price === "undefined");
var u = Vehicle();        //u is the return value of the function but the function does not has a return value, so u is undefined
assert.equal(undefined, u);
assert.equal(1000, price); //this=global

function Person(name) {
    if(!(this instanceof Person)){
        return new Person(name);
    }
    this.name = name;
}
var p= new Person("Alice");
assert.equal("Alice",p.name);
var q = Person("Bob");
assert.equal("Bob",q.name);


var bob = {
    name: "Bob",
    hello: function(){
        return "Hello " + this.name;
    }
};
assert.equal("Bob",bob.name);
assert.equal("Hello Bob", bob.hello());
var hello = bob.hello;
assert.equal("Hello undefined", hello()); //" this" is not stable
assert.equal("Hello Bob", hello.call(bob));
assert.equal("Hello Bob", hello.apply(bob));
assert.equal("Hello Bob", hello.bind(bob)()); // func.bind()is a function, to get the result, should add ()

var order = {
    price: 100,
    calculate: function(){
        var that = this;
        return {
            name: "summary",
            getValue: function(qty){
                return qty * that.price;
            }
        }
    },
    calculate2: function(){
        return {
            name: "summary",
            getValue: function(qty){
                return qty * this.price;
            }
        }
    }
};
assert.equal(100, order.price);
var result = order.calculate();
assert.equal("summary", result.name);
assert.equal(1000, result.getValue(10));
var result = order.calculate2();
assert.equal(1000, result.getValue.call(order,10));
assert.equal(1000, result.getValue.apply(order,[10]));
assert.equal(1000, result.getValue.bind(order)(10));

//How to stablize "this"?
//Three functions: call, apply, bind
function power(a,b){          //it returns (a+b)^n
    return Math.pow(a+b, this.n);
}

var p = {n:2};
assert.equal(25, power.call(p,2,3));
assert.equal(25, power.apply(p,[2,3]));

var power2 = power.bind(p);
assert.equal(25, power2(2,3));
assert.equal(25, power.bind(p)(2,3));

///////////////////////////////////////////////////////////////////////
//Find total price by customer's type
function getTotalPrice(price, qty,type){
    var result = price*qty;
    switch(type){
        case "VIP": result *= 0.7; break;
        case "Premium": result *= 0.8; break;
        case "Regular":
        default: break;  
    }
    return result;
}

assert.equal(700, getTotalPrice(100,10, "VIP"));
assert.equal(800, getTotalPrice(100,10, "Premium"));
assert.equal(1000, getTotalPrice(100,10, "Regular"));
assert.equal(1000, getTotalPrice(100,10, null));
//above is not good, because not code refactoring, the above code is tight-coupling

//de-coupling of logic and data
function getTotalPrice2(price, qty, type){
    return price * qty * this[type];
}

var customer = {
    VIP: 0.7,
    Premium: 0.8,
    Regular: 1,
};
assert.equal(700, getTotalPrice2.call(customer, 100, 10, "VIP"));
assert.equal(800, getTotalPrice2.apply(customer, [100,10, "Premium"]));
assert.equal(1000, getTotalPrice2.bind(customer)(100,10, "Regular"));

//Multiple Inheritance
function A(){
    this.x = 10;
}
function B(){
    this.y = "abc";
}
function C(){    //C wants to inherit both A and B's properties
    A.call(this);
    B.call(this);
}
var c =new C();
assert.equal(10, c.x);
assert.equal("abc", c.y);
assert.ok(!(c instanceof A));
assert.ok(!(c instanceof B));
console.log(Object.keys(c));   // the properties belong to c, not from its parents






