const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    id: String,
    cat_name: String,
    cat_name_link: String,
    count: Number
})

const CategoryDB = mongoose.model('Category', CategorySchema);

module.exports = {
    CategoryDB
}