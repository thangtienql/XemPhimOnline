
const ApiGetData= require('../ApiServices/ApiGetData.js');

const GetMoviesByCategoryRoute = async (req, res, next)=>{
    let data={};
    try {
       const ress=await ApiGetData.getMoviesByCateGory();
       console.log(ress)
        const { response :{
            data:listMovies
        }}=ress;
        // res.render('index', { title: 'Express', dataMovieHot: dataMovieHot, dataNewMovies: dataNewMovies})
        res.render('list', { listMovies:listMovies})
    } catch(err) {
        console.log('error:',err)
        res.render('index', {
            title: 'Xem Phim',
        })
    }
}

module.exports ={
    GetMoviesByCategoryRoute
}