//done by Xuerong 
(function(global){ 

    var Calculator= function(){
        if(!(this instanceof Calculator)) {
            return new Calculator();
        }
    };
    Calculator.prototype.add = function(x, y){
        return x+y;
    };
    Calculator.prototype.subtract = function(x, y){
        return x-y;
    };
    Calculator.prototype.multiply = function(x, y){
        return x*y;
    };
    Calculator.prototype.divide = function(x, y){
        if( y === 0 ){
            return NaN;
        }
        return x/y;
    };

    var cal1 = new Calculator();


    ///////////////////////////////////////////////////////////////////////
    function ScientificCalculator(){
    }
    ScientificCalculator.prototype = Object.create(Calculator.prototype); //cal2 -> Calculator.prototype -> ScientificCalculator.prototype -> Object.prototype -> null
    ScientificCalculator.prototype.constructor = ScientificCalculator;
    ScientificCalculator.prototype.sin = function(x){
        return Math.sin(x);
    }
    ScientificCalculator.prototype.cos = function(x){
        return Math.cos(x);
    }
    ScientificCalculator.prototype.tan = function(x){
        return Math.tan(x);
    }
    ScientificCalculator.prototype.log = function(x){
        return Math.log(x);
    }

    var cal2 = new ScientificCalculator();


    ///////////////////////////////////////////////////////////////////////
    function withExponents(){
        this.pow = function(x,y){
            return Math.pow(x,y);
        }
        this.multiplyExp = function(x, y){
            return this.pow.apply(null,x)*this.pow.apply(null,y);
        }

        // This.multiplyExp = function(a,b){
        //     Var x = this.pow.apply(null,a);
        //     Var y = this.pow.apply(null,b);
        //     Return this.multiply(x,y);
        // }

        this.divideExp = function(x, y){
            return this.pow.apply(null,x)/this.pow.apply(null,y);
        }
    }
    var cal3 = new Calculator();
    withExponents.call(cal3);  //cal3 has method pow, multiplyExp, divideExp


    ///////////////////////////////////////////////////////////////////////

    function delay(time, obj, method, params) {
        return new Promise( function(resolve, reject){
            setTimeout(function(){
                if(typeof obj[method] === "function"){     //obj[method] != undefined is not correct, obj[method] can be a value 
                    resolve(obj[method].apply(null,params));
                }else{
                    reject("cannot excute functions that do not exist");
                }},time);
        });
        
    }
    var cal4 = new Calculator();
    var willAdd = delay(100, cal4, 'add', [1,1]);
    var test1 = delay(1000, cal4, 'add', [10,5]);
    var test2 = delay(500, cal4, 'subtract', [9,5]);
    var test3 = delay(1000, cal4, 'sqrt', [2,2]);
    willAdd.then(function(data){

        console.log("Fulfilled, the result is " + data);
        return test1;
    },function(err){
        console.log(err);
        return test1;
    }).then(function(data){
        
        console.log("Fulfilled, the result is " + data);
        return test2;
    },function(err){
        console.log(err);
        return test2;
    }).then(function(data){
        
        console.log("Fulfilled, the result is " + data);
        return test3;
    },function(err){
        console.log(err);
        return test3;
    }).then(function(data){
        console.log("Fulfilled, the result is " + data);
    },function(err){
        console.log(err);
    });


    global.Calculator = Calculator;
    global.ScientificCalculator = ScientificCalculator;
    global.withExponents = withExponents;
    global.delay = delay;
})(window);


