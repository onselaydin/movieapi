let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  //res.send('respond with a resource');
  res.json({status:1});
});

const Movie = require('../models/Movie')

router.post('/',(req,res,next) => {
  //const {title, imdb_score, category, country, year } = req.body; //1. yöntem
  const movie = new Movie(req.body); // 2. yöntem
  //const data = req.body;
 /*  const movie  = new Movie({
    title: title,
    imdb_score: imdb_score,
    category: category,
    country: country,
    year:year
  }); */
  /* movie.save((err, data) => {
    if(err)
    console.log(err);

    res.json(data);
}); */
 // res.send(title);

 const promise = movie.save();
 promise.then((data) => {
  res.json({ status: 1 });
 }).catch((err) => {
   res.json(err);
 });

});

module.exports = router;
