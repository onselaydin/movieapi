const mongose = require('mongoose');
const Schema = mongose.Schema;

const DirectorSchema = new Schema({
    name: String,
    surname: String,
    bio: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongose.model('director', DirectorSchema);