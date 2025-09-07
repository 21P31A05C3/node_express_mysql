const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

class Server {
    app;
    port;

    // Start server configuration when an instance of the class is created
    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT, 10) || 8000;

        // Log requests to the console.
        this.app.use(logger('dev'));

        // Set the cors configuration
        const corsOptions = {
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
            allowedHeaders: ['Content-Type'] // Allow specific headers
        };
        this.app.use(cors(corsOptions));

        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(bodyParser.json());        
    }    

    /**
     * Method for creating and starting the server
     * 
     * @param {Function} callback Function to be executed when the server starts
     */
    start(callback) {
        this.app.set('port', this.port);

        const server = http.createServer(this.app);
        server.listen(this.port, 'localhost', 0, callback);        
    }
}

module.exports = Server;