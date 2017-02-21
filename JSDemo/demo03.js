//Method in Object
var assert = require("assert");

//how to go through object
var alice = {
    name: "Alice",
    age: 20,
    hello: function(){
        return ("Hello " + this.name);
    }
};

assert.equal("Alice", alice.name);
assert.equal(20, alice.age);
assert.equal("Hello Alice", alice.hello());
//what if we do not know the properties inside alice object?
var keys = Object.keys(alice);
console.log(keys);
/*for(var i=0; i < keys.length; i++){
    if(typeof alice[keys[i]] === "function"){
        console.log(keys[i] + ": " + alice[keys[i]]());
    }else{
        console.log(keys[i] + ": " + alice[keys[i]]);
    }
}*/
keys.forEach(function(key, index){
    if(typeof alice[key] === "function"){
        console.log(key + ": " + alice[key]() + ": " +index);
    }else{
        console.log(key + ": " + alice[key] + ": " +index);
    }
});


var props = Object.getOwnPropertyNames(alice);
console.log(props);


//compare Object.keys and Object.getOwnPropertyNames
//Object.getOwnPropertyNames can reutrn properties that are not enumerable 
var array = [3,1,5,7,2];
console.log("Keys: " + Object.keys(array));
console.log("Keys: " + Object.getOwnPropertyNames(array));

//Accessors and Mutators
var bob = {
    _name: "Bob",
    get name(){
        return this._name;
    },
    set name(inputName){
        this._name = inputName;
    }
};

assert.equal("Bob",bob.name);  //getter
bob.name = "David";           //setter
assert.equal("David", bob.name);
assert.equal("David", bob._name);


var obj = {
    name: "Object",
    value: 100,
    foo: function(){
        return "foo";
    }
};

console.log(JSON.stringify(obj));
console.log(JSON.stringify(array));           //not a json object
