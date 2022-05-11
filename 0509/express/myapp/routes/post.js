const express = require('express');
const BookSchema = require('../models/book');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
})

router.get('/del', (req,res) => {
    res.render('delete');
})

router.get('/bookinfo/:id', (req, res) => {
    const authorname = req.params.id;
    //Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});
    // BookSchema.findOne({author:authorname}, (err,result) => {
    //     if(result) {
    //         return res.json(result);
    //     } else {
    //         return res.send("등록된 작가가 없습니다.");
    //     }
    // });
    BookSchema.find({author:authorname})
        .then(result => res.json(result))
        .catch(err => res.send("this is" + err));
})

router.delete('/del/:id', (req, res) => {
    const bookname = req.params.id;

    BookSchema.findOneAndDelete({bookname:bookname})
        .then(result => res.json({redirect:'/expost'}))
        .catch(err => console.log(err));
})

// router.post('/del/:id', (req, res) => {
//     const bookname = req.params.id;

//     BookSchema.findOneAndDelete({bookname:bookname})
//         .then(result => res.json({redirect:'/expost'}))
//         .catch(err => console.log(err));
// })

// get, post, put ==> 업데이트/수정 , delete
router.post('/', (req, res, next) => {
    const bookname = req.body.bookname;
    const author = req.body.author;
    const price = req.body.price;
    const date = req.body.date;
    res.json({bookname,author,date,price});
    // next(); // 다음 미들웨어로 넘어가라
})

// expost/addbook
router.post('/addbook', (req, res, next) => {
    const bookname = req.body.bookname;
    const author = req.body.author;
    const price = req.body.price;
    const date = req.body.date;
    //const priceCheck = req.body.price || 5000;
    
    let bookData = new BookSchema({
        bookname, author, price, publish:date
    });

    bookData.save();
    res.redirect('/expost');
})

/* response 응답
    웹 통신 방식 1요청 1응답.
    이후에는 통신 종료가 정상임.
*/

router.post('/', (req, res) => {
    // res.redirect => 호출한 경로로 재접근
    res.redirect('/expost')
})

module.exports = router;