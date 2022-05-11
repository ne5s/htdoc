function add(a,b) {
    return a+b;
}

const sub = (a,b) => a-b;

const mul = (a,b) => a*b;

module.exports = {add, mul, sub};
// 풀어쓰면
// module.exports = {
//     add:add,
//     sub:sub,
//     mul:mul
// }
// module.exports.add = add;
// module.exports.mul = mul;
// module.exports.sub = sub;
// 이름 바꿔서 전달할거면
// module.exports.sub1 = sub;
// 변수도 보낼 수 있음.