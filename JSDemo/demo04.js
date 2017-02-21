//JS property attributes and object status
var assert = require("assert");


//each property has three attributes called enumerable, writable, configurable
var alice = {
    name: "Alice"
};

alice.salary = 1000;      //By default salary is enumerable, writable
console.log(Object.keys(alice));   //salary is enumerable
alice.salary =2000;
assert.equal(2000, alice.salary);  //salary is writable

//use Object.defineProperty to add a property with different attributes
Object.defineProperty(alice, "age",{
    value: 30    //if we do not specify, all three attributes are false
});

console.log(Object.keys(alice));  //age is not enumerable
alice.age = 40;
assert.equal(30, alice.age);   //age is not writable

Object.defineProperty(alice, "salary", {
    writable: false
});
alice.salary = 5000;
assert.equal(2000, alice.salary);   //now salary is not writable, and it is configurable

/*Object.defineProperty(alice, "age", {             //Error: Since age is not configurable
    writable: true
});
alice.age = 50;
assert.equal(30, alice.age);*/

//An object has three status: extensible(no create), sealed(no delete), frozen(no update)
var obj = {
    x: 100,
    y: "abc"
};
//By default, obj is extensible
assert.ok(Object.isExtensible(obj));
obj.z = 200;
assert.equal(200, obj.z);
Object.preventExtensions(obj);           //Now obj is not extensible
assert.ok(!Object.isExtensible(obj));
obj.w = "def";
assert.equal(undefined, obj.w);
//Now we can not add a property in obj but we cna still delete delete a property in obj
assert.ok(!Object.isSealed(obj));
delete obj.z;
assert.equal(undefined, obj.z);         //property z is successfully deleted
Object.seal(obj);                       //now obj is ar sealed status
delete obj.x;
assert.equal(100, obj.x);              //x can not be deleted any more
assert.ok(Object.isSealed(obj));        
//Now we cannot insert or delete a property, but we still can update a property
assert.ok(!Object.isFrozen(obj));
obj.x = 200;
obj.y ="xyz";
assert.equal(200, obj.x);
assert.equal("xyz", obj.y);
Object.freeze(obj);            //Now obj is frozen
obj.x=  300;
obj.y = "sf";
assert.equal(200, obj.x);
assert.equal("xyz", obj.y);
assert.ok(Object.isFrozen(obj));

//ALL primitive objects are frozen
Object.isFrozen("abc");
Object.isFrozen(100);
Object.isFrozen(undefined);
Object.isFrozen(false);
Object.isFrozen(null);



