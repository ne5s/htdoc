const express = require('express');
const blogSchema = require('../models/blog');
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await blogSchema.find({}).exec();
    res.render('blog/blog', {content: result});
});

// 2022-05-17 추가한 것
router.get('/read/:id', async (req, res) => {
    const contentNo = req.params.id;
    const result = await blogSchema.findOne({no : contentNo}).exec();
    res.render('blog/blogcontent', {content : result});
})

router.get('/write', (req, res) => {
    res.render('blog/write');
})

router.post('/write', (req, res, next) => {
    const { title, content } = req.body;
    const blogText = new blogSchema({
        title, content
    });
    blogText.save().then(result => {
        console.log(result);
        res.redirect('/blog');
    }).catch(err =>{
        console.log(err);
        next(err);
    })
});

// mongoose 함수들은 다 비동기라서 async await로 해줘야함.
// Promise.all 할 일이 있다면 promise then으로 할 수 있음
// 디버깅하기에는 promise가 더 좋을 수 있다.
// blogSchema.findOneAndDelete({no})
// .then(result=> {
//     //성공 결과
// }).catch(err => {
//     //에러나 오류가 발생
// })
router.delete('/delete/:id', (req, res) => {
    const no = req.params.id;
//  const result = await
    // await 했으면 그냥 res.redirect 할텐데
    // then을 쓰면 오류가 날 수 있음 그래서 저렇게 처리해줬음
    blogSchema.findOneAndDelete({no})
        .then(result => {
            return res.status(200).json({
                redirect:'/blog'
            });
        }).catch(err => {
            console.log(err);
        });
})

router.get('/updateread/:id', async (req, res) => {
    const contentNo = req.params.id;
    const result = await blogSchema.findOne({no:contentNo}).exec();
    res.render('blog/blogupdate', {content : result});
})

router.post('/updatewrite/:id', async (req, res) => {
    const {title,content} = req.body;
    const no = req.params.id;
    await blogSchema.findOneAndUpdate({no}, {
        title, content
    }).exec();
    const updateResult = await blogSchema.findOne({no}).exec();
    res.render('blog/blogcontent', {content:updateResult});
})

//데이터를 수정 => 완료 시 완료된 페이지로 이동. 수정된 내용을 확인

module.exports = router;