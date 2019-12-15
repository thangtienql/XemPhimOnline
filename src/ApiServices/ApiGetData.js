const fetch = require('node-fetch');

const URL_API_BASE ='http://xemphimplus.net/movie-api';

const ApiGetData= {
    getDataHome:async ()=>{
        const res = await fetch(URL_API_BASE +'/home');
        return await res.json();
    },
    getAllCategory:async ()=>{

    },
    getMoviesByCateGory:async ()=>{
        
    }
}

module.exports=ApiGetData;
