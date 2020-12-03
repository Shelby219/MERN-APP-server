const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const PantrySchema = new Schema({
    ingredient: {
        type: String
    }
});

module.exports = mongoose.model('pantry', PantrySchema);