
var num = 3.14159265;  // Number 인스턴스를 생성함.
num.toFixed();         // 3
num.toFixed(2);        // 3.14

var num = 3.14159265;      // Number 인스턴스를 생성함.
num.toPrecision();         // 3.14159265
num.toPrecision(2);        // 3.1

num.toString(2);     // 11111111
(100).toString(16);  // 64
(-0xff).toString(2); // -11111111

var numObj = new Number(123); // 123의 값 객체
typeof numObj;                // object
var num = numObj.valueOf();
num;                          // 123
typeof num;                   // number