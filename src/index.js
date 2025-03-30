const express = require("express");
const bodyParser = require('body-parser');
const CityRepository = require("./repository/city-repository");

const {PORT} = require("./config/serverConfig");

const setupAndStartServer = async () => {
    // create the instance of express
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT , () =>{
        console.log(`Server is running at ${PORT}`);
        city = new CityRepository();
        city.createCity({name:"Delhi"})
    });
}

setupAndStartServer();

