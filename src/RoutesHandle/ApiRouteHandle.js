
const ApiGetData = require('../ApiServices/ApiGetData');
const Function = require('../Common/Function');
const { CategoryDB } = require('../Database/SchemaDB');

const UpdateCategoryApi = async (req, res, next) => {
    let data = {};
    try {
        let categories = await ApiGetData.getAllCategory();
        categories.response.forEach( async (element) => {
            let catLink = Function.textToSlug(element.cat_name);
            if (catLink != 'all-categories') {
                let category = await CategoryDB.findOne({cat_name_link: catLink});
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

module.exports = {
    UpdateCategoryApi
}