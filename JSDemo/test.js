var assert = require("assert");
function createCount() {           //obj is called the dynamic naming space
    var count = 0;
    getCount = function() {
        return count;             //if here return this.count, then it has nothing to do with the above count
    }
    setCount = function(c) {
        count = c;
    }
}
var o1 = {};
createCount();
assert.equal(0, getCount());
setCount(10);
assert.equal(10, getCount());
assert.equal(undefined, o1.count);

var s =(function(){
    var count = 0 ;
    return  count;
    /*function(){
            return ++count;
     }*/
})();

var ss = function(){
    var count = 0 ;
    return function(){
            return ++count;
     }
};
console.log(typeof s);
console.log(typeof ss);
console.log(s());
console.log(ss());
// console.log(s());
// console.log(s());
// console.log((function(){
//     var count = 0 ;
//     return function(){
//             return ++count;
//      }
// })()());

