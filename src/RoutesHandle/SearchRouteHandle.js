
const ApiGetData = require('../ApiServices/ApiGetData.js');

const SearchRouteHandleRoute = async (req, res, next) => {
    let data = {};
    try {
        const { query: { keywords } } = req;
        const resSeearch = await ApiGetData.searchByKeyword(keywords);
        console.log(resSeearch)
        const { response: {
            data: listMovies
        } } = resSeearch;
        // res.render('index', { title: 'Express', dataMovieHot: dataMovieHot, dataNewMovies: dataNewMovies})
        res.render('list', { listMovies: listMovies })
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