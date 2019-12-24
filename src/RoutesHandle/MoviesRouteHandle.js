
const ApiGetData = require('../ApiServices/ApiGetData.js');
const { CategoryDB } = require('../Database/SchemaDB');

const GetMoviesByCategoryRoute = async (req, res, next) => {
    let data = {};
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let perPage = 12;
        let slugCategory = req.params['slug'];
        let category = await CategoryDB.findOne({cat_name_link: slugCategory});
        const ress = await ApiGetData.getMoviesByCateGory(category.cat_id, page, perPage);
        const { response: {
            data: listMovies
        } } = ress;
        let lastPage = Math.ceil(ress.total_movie/perPage);
        res.render('list', { listMovies: listMovies, page: page, lastPage: lastPage });
    } catch (err) {
        console.log('error:', err)
        res.render('index', {
            title: 'Xem Phim',
        })
    }
}

module.exports = {
    GetMoviesByCategoryRoute
}