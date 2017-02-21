///JS closure
var assert = require("assert");

/*
        JS closure is a funciton that is defined in another function. The inner function can acess all the local variables of the outer function. If the inner function is returned, then the local variable of the outer function is still alive after the outer function is executed.
        Disadvantage: Closure might result memory leak
*/

//use closeure to encapsulation
var welcome = function(){
    var name = "Alice";
    return function(prefix) {
        return "Hello " + prefix + " " + name;
    }
};
var hello = welcome();
assert.equal("Hello Ms Alice", hello("Ms"));
//console.log(name);  //name is not defined



var createPerson = function(){
    var name = "default";
    return{
        getName: function(){
            return name;
        },
        setName: function(anotherName) {
            name = anotherName;
        }
    }
};
var person = createPerson();
assert.equal("default", person.getName());
person.setName("Bob");
assert.equal("Bob", person.getName());
assert.equal(undefined, person.name);

//Another application of closure: dynamic naming space
function createCount(obj) {           //obj is called the dynamic naming space
    var count = 0;
    obj.getCount = function() {
        return count;             //if here return this.count, then it has nothing to do with the above count
    }
    obj.setCount = function(c) {
        count = c;
    }
}
var o1 = {};
createCount(o1);
assert.equal(0, o1.getCount());
o1.setCount(10);
assert.equal(10, o1.getCount());
assert.equal(undefined, o1.count);
/*
//the same funcitonality of the above part
function createCount() {           //obj is called the dynamic naming space
    var count = 0;
    this.getCount = function() {
        return count;
    }
    this.setCount = function(c) {
        count = c;
    }
}
var o1 = {};
createCount(o1);
assert.equal(0, getCount.call(o1));
setCount.call(o1,10);
assert.equal(10, getCount.call(o1));
*/
var o2 = {count: 100};    //count == this.count
createCount(o2);
assert.equal(0, o2.getCount());
o2.setCount(20);
assert.equal(20, o2.getCount());
assert.equal(100, o2.count);



//Closure Application:  Singleton: use closure to implement Singleton
var Singleton = (function(){
    var instance;
    return {
        getInstance: function() {
            if(!instance) instance = new Object();
            return instance;
        }
    }
})();
var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
assert.ok(s1 === s2);

//Q: Define a function that returns an increasing number starting from 1
var increase = (function(){
    var count = 0 ;
    return function(){
            return ++count;
     }
})();

assert.equal(1, increase());
assert.equal(2, increase());
assert.equal(3, increase());
assert.equal(4, increase());

//Another example
for(var i=0; i<5; i++){
    /*setTimeout(function(){
        console.log(i);                 //output are 5 5 5 5 5
    },100);*/
    /*btn.addEventListener("click", function() {   //is same with setTimeout
		    console.log(i);
	    });*/
    setTimeout(handle(i), 0);
}

function handle(index){
    return function(){
        console.log(index);        //result is 0,1,2,3,4
    }
}
