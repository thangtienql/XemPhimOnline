const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    id: String,
    cat_name: String,
    cat_name_link: String,
    cat_id: String,
    count: Number
})

const CategoryDB = mongoose.model('Category', CategorySchema);

const FilmSchema = new Schema({
    id: String,
    film_id: String,
    post_link: String,
    post_title: String,
    post_author: String,
    post_date: Date,
    is_trailer: Boolean,
    quality: String,
    episode_total: Number,
    episode: String,
    duration: String,
    img: String,
    post_original_title: String,
    content: String,
    cat_lists: Array,
    rate: Number,
    count: Number,
    total_users_score: Number
});

const FilmDB = mongoose.model('films', FilmSchema);

module.exports = {
    CategoryDB,
    FilmDB
}