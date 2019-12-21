const fetch = require('node-fetch');

const URL_API_BASE ='http://xemphimplus.net/movie-api';

const ApiGetData= {
    getDataHome:async ()=>{
        const res = await fetch(URL_API_BASE +'/home');
        return await res.json();
    },

    // http://xemphimplus.net/movie-api/get_categories
    getAllCategory:async ()=>{
        const res = await fetch(URL_API_BASE + '/get_categories');
        return await res.json();
    },

    //http://xemphimplus.net/movie-api/get_movies_by_category?cat_id=755&per_page=5&page=1
    getMoviesByCateGory: async (idCat ='751',page=1,perPage=12 )=>{
        const link = URL_API_BASE + '/get_movies_by_category?cat_id='+idCat+'&per_page='+perPage+'&page='+page;
        const res = await fetch(link);
        return await res.json();
    },

    searchByKeyword:async (keyword='', page = 1, perPage = 12)=>{
        const link = URL_API_BASE + '/get_search_results?s_query='+keyword+'&page='+page+'&per_page='+perPage;
        const res = await fetch(link);
        return await res.json();
    }
}

module.exports=ApiGetData;
