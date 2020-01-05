
const ApiGetData = require('../ApiServices/ApiGetData');
const Function = require('../Common/Function');
const { CategoryDB, FilmDB } = require('../Database/SchemaDB');

const UpdateCategoryApi = async (req, res, next) => {
    let data = {};
    try {
        let categories = await ApiGetData.getAllCategory();
        categories.response.forEach(async (element) => {
            let catLink = Function.textToSlug(element.cat_name);
            if (catLink != 'all-categories') {
                let category = await CategoryDB.findOne({ cat_name_link: catLink });
                if (category) {
                    await category.updateOne({
                        cat_name: element.cat_name,
                        cat_name_link: catLink,
                        cat_id: element.id,
                        count: element.count
                    });
                } else {
                    await CategoryDB.create({
                        cat_name: element.cat_name,
                        cat_name_link: catLink,
                        cat_id: element.id,
                        count: element.count
                    });
                }
            }
        });
        res.send('Update categories successfully');
        // res.render('index', { title: 'Express', dataMovieHot: dataMovieHot, dataNewMovies: dataNewMovies})
    } catch (err) {
        console.log('error:', err);
    }
}

const UpdateFilmApi = async (req, res, next) => {
    let data = {};
    try {
        let films = await ApiGetData.getAllFilm();
        await films.response.data.forEach(async (element) => {
            let film = await FilmDB.findOne({ film_id: element.ID });
            if (film) {
                await film.updateOne({                
                    post_link: element.post_link,
                    post_title: element.post_title,
                    post_author: element.post_author,
                    post_date: element.post_date,
                    is_trailer: element.is_trailer,
                    quality: element.quality,
                    episode_total: element.episode_total,
                    episode: element.episode,
                    duration: element.duration,
                    img: element.img,
                    post_original_title: element.post_original_title,
                    content: element.content,
                    cat_lists: element.cat_lists,
                    rate: element.rate,
                    count: element.count,
                    total_users_score: element.total_users_score
                });
            } else {
                FilmDB.create({
                    film_id: element.ID,
                    post_link: element.post_link,
                    post_title: element.post_title,
                    post_author: element.post_author,
                    post_date: element.post_date,
                    is_trailer: element.is_trailer,
                    quality: element.quality,
                    episode_total: element.episode_total,
                    episode: element.episode,
                    duration: element.duration,
                    img: element.img,
                    post_original_title: element.post_original_title,
                    content: element.content,
                    cat_lists: element.cat_lists,
                    rate: element.rate,
                    count: element.count,
                    total_users_score: element.total_users_score
                });
            }
        });
        res.send('Update film successfully');
    } catch (err) {
        console.log('error:', err);
    }
}

module.exports = {
    UpdateCategoryApi,
    UpdateFilmApi
}