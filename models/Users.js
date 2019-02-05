const mongose = require('mongoose');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5
    }
    
});


module.exports = mongose.model('user', UserSchema);