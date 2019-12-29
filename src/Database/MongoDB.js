var mongoose = require('mongoose');
const URL_DATABASE = dbConnectString();
var env = require("../Common/Env");

let options = {useNewUrlParser: true};

var MongoDB = {
    connectDB: async () => {
        mongoose.Promise = global.Promise;
        console.log("url mongo:", URL_DATABASE);
        mongoose.set('useCreateIndex', true);
        console.log(connectOption());
        return await mongoose.connect(URL_DATABASE, connectOption());
    }
}

function dbConnectString() {
    const APP_HOST = '127.0.0.1';
    const APP_DB = 'MovieDB';

    return `mongodb://${APP_HOST}/${APP_DB}`;
}


function dbConnectTestLocalString() {
    const APP_HOST = 'localhost';
    const APP_DB = 'MovieDB';

    return `mongodb://${APP_HOST}/${APP_DB}`;
}

function connectOption() {
    if (env.get("APP_ENV") == "production") {
        const DB_USER = "admin_mongo";
        const DB_PASS = "admin789@#";
        return {
            useNewUrlParser: true,
            auth: {
                user: DB_USER,
                password: DB_PASS
            }
        }
    } else {
        return options
    }
}

module.exports = MongoDB;


