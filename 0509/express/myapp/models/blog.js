const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const blogSchema = mongoose.Schema;

// 블로그 글 제목.
// 블로그 본 글 내용
// auto-increment

// 초기화 작업
autoIncrement.initialize(mongoose);

const blog = new blogSchema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    no : Number,
},{
    timestamps:true
});

blog.plugin(autoIncrement.plugin, {
    model: 'blog',
    field: 'no',
    startAt:4,
    incrementBy:1
});

const blogModel = mongoose.model('blog', blog);
module.exports = blogModel;
