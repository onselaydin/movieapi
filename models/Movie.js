const mongose = require('mongoose');
const Schema = mongose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true,'{PATH} alanı zorunludur']
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    director_id: Schema.Types.ObjectId,
    CreatedAt: {
        type: Date,
        default: Date.now
    }   
});


module.exports = mongose.model('movie', MovieSchema);