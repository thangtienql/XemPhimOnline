
const ApiGetData = require('../ApiServices/ApiGetData.js');

const SearchRouteHandleRoute = async (req, res, next) => {
    let data = {};
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        const { query: { keywords } } = req;
        console.log(keywords);
        const resSeearch = await ApiGetData.searchByKeyword(keywords, page, 15);
        console.log(resSeearch)
        const { response: {
            data: listMovies
        } } = resSeearch;
        let lastPage = 1;
        // res.render('index', { title: 'Express', dataMovieHot: dataMovieHot, dataNewMovies: dataNewMovies})
        res.render('list', { listMovies: listMovies, page: page, lastPage: lastPage })
    } catch (err) {
        console.log('error:', err)
        res.render('index', {
            title: 'Xem Phim',
        })
    }
}

module.exports = {
    SearchRouteHandleRoute
}