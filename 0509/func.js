let number = 0;

// module.exports = number+=1;
//모듈을 함수형. 함수로써 호출
module.exports = () => {
    return number += 1;
}