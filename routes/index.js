const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Models
const User = require('../models/Users');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hknyclcll naber :) işte heroku...' });
});

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10).then((hash) => {
      
          const user = new User({
            username,
            password: hash
        });

        const promise = user.save();
        promise.then((data) => {
          res.json(data);
        }).catch((err) => {
          res.json(err);
        });

    });
});

router.post('/authenticate', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({
    username
  },(err,user) => {
    if(err)
    throw err;
    if(!user){
      res.json({
        status: false,
        message: 'Authentication failed. User not found.'
      });
    }else{
      bcrypt.compare(password, user.password).then((resutl) => {
        if(!resutl){
          res.json({
            status:false,
            message: 'Authentication failed, wrong password.'
          });
        }else{
          const payload = {
            username
          };
          const token = jwt.sign(payload, req.app.get('api_secret_key'),{
            expiresIn: 720 // 12 saatmiş
          });
          res.json({
            status: true,
            token
          });
        }

      });
    }
  });

});

module.exports = router;
