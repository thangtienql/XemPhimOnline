
const ApiGetData= require('../ApiServices/ApiGetData.js');

const HomeRouteHandle = async (req, res, next)=>{
    let data={};
    try {
        const r= await ApiGetData.getDataHome();
        // console.log('data home:',res);
        const { response:{
            movies:{
                //phim hot, phim de cu
                nominated_movies:dataMovieHot,

                //phim moi nhat
                latest_movies:dataNewMovies,

                //phim bộ mới nhất
                latest_movies_set: dataSeriesMovie,

                // Phim le moi nhat
                latest_retail_movies: latestRetailMovies
            }
        }}=r;
        // data=response;
        const objdata = {
            title: 'Xem Phim',
           dataMovieHot:dataMovieHot,
           dataMoviesTab:{
               dataNewMovies: dataNewMovies,
               dataSeriesMovie: dataSeriesMovie,
               latestRetailMovies: latestRetailMovies
           }
        }
        // console.log(objdata)
        // res.render('index', { title: 'Express', dataMovieHot: dataMovieHot, dataNewMovies: dataNewMovies})
        res.render('index', objdata)
    } catch(err) {
        console.log('error:',err)
        res.render('index', {
            title: 'Xem Phim',
        })
    }
}

module.exports ={
    HomeRouteHandle
}