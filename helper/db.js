const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:abcd1234@ds213645.mlab.com:13645/movieapi',{ useNewUrlParser: true });
    mongoose.connection.on('open',() => {
        console.log('MongoDb: Connected');
    });
    mongoose.connection.on('error',(err) => {
        console.log("MongoDb: Error",err);
    });

    mongoose.Promise = global.Promise;

};
