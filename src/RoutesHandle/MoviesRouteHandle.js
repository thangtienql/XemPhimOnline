
const ApiGetData = require('../ApiServices/ApiGetData.js');

const GetMoviesByCategoryRoute = async (req, res, next) => {
    let data = {};
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let perPage = 12;
        let categoryId = req.query.cat;
        const ress = await ApiGetData.getMoviesByCateGory(categoryId, page, perPage);
        const { response: {
            data: listMovies
        } } = ress;
        console.log(ress);
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