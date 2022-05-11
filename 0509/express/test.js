// const app = require("./myapp/app.js")
const obj = {name: 'elice', age: 5};
const { name: n1, age: a1 } = obj;
console.log(n1, a1);

const arr = ['some', 'values']
const [first, second] = arr;
console.log(first, second)

const aww = {one:"2", two:"3"};
const {one, two} = aww
console.log(one ,two)