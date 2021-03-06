let express = require('express');
let router = express.Router();

const Movie = require('../models/Movie')

/*router.get('/', (req, res) => {
  const promise = Movie.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});*/

router.get('/', (req, res) => {
  const promise = Movie.aggregate([
    {
      $lookup:{
        from: 'directors',
        localField:'director_id',
        foreignField: '_id',
        as: 'director'
      }
    },
    {
      $unwind: '$director'
    }
  ]);
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/top10', (req, res) => {
  const promise = Movie.find({ }).limit(10).sort({ imdb_score: -1 });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/between/:start_year/:end_year', (req, res) => {
  const { start_year, end_year } = req.params;
  const promise = Movie.find(
    { 
    year: { "$gte": parseInt(start_year), "$lte": parseInt(end_year) }
    }
  );
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


router.get('/:movie_id',(req, res, next) => {
  //res.send(req.params.movie_id);
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    if(!movie)
    next({ message: 'movie was not found!!'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(
    req.params.movie_id,
    req.body,
    {
      new: true
    }
  );
  promise.then((movie) => {
    if(!movie)
    next({ message: 'movie was not found!!'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

router.delete('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndRemove(
    req.params.movie_id
  );
  promise.then((movie) => {
    if(!movie)
    next({ message: 'movie was not found!!'});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

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
