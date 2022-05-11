const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    bookname : String,
    author : String,
    price : Number, // price: { type : Number, default : 5000},  -> default 값을 줄 수 있음
    publish : Date,
    // sales : {type : Boolean, default: false},
    // 이걸 하는 이유는 서점 저장정보를 넣어두고, true인것 false인 것 다른 
});

// 두번째 인자에는 데이터 값이 와야함.
const bookData = mongoose.model('bookinfo', book)


module.exports = bookData;