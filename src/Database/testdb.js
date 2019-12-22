
const MongoDB = require('./MongoDB')
const DbApp = require('./DatabaseApp')

const objtest = {
    "id": 'all',
    "cat_name": "all",
    "count": 0
}

MongoDB.connectDB().then(() => {
    console.log("----- Connected DB ------");
}, (err) => {
    console.log("connect DB error:", err);
});

let db=new DbApp();

db.updateCategory(objtest);