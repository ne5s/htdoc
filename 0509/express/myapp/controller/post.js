const BookSchema = require('../models/book');

const getbookinfo = (req, res) => {
    const authorname = req.params.id;
    BookSchema.find({author:authorname})
        .then(result => res.json(result))
        .catch(err => res.send("this is" + err));
}

const addbook = (req, res) => {
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
}

module.exports = {
    getbookinfo, 
    addbook
}