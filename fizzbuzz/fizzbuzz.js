"use strict";

var fizzBuzzMachine = function (number) {

  for (var i=0; i<number; i++) {
  
    if (((i % 3) === 0) && ((i % 5) ===0)) {
      console.log("fizzBuzz");
    }
    else if ((i % 3) === 0) {
        console.log("fizz");
     }
    else if ((i % 5) === 0) {
        console.log("buzz");
     }
    else 
        console.log(i);
  }
};
fizzBuzzMachine(100);
