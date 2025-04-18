const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
    // create the instance of express
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT , () =>{
        console.log(`Server is running at ${PORT}`);
    });
}

setupAndStartServer();

