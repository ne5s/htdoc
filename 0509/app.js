const cal = require("./cal.js");
const func = require("./func.js")
//require는 한번만 호출되고 사라짐

// console.log(cal.add(5,3));
// console.log(cal.mul(5,3));
// console.log(cal.sub(5,3))
// console.log(func);
console.log('일반호출 : ', func());
for(let i=0; i<10; i++) {
    console.log(func());
}