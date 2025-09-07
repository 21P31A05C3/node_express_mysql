const userRoutes = require('./users.js');

class Routes {
    constructor(){}

    // Generate REST API routes for all modules
    generate(server) {        
        server.app.use('/user', userRoutes);
    }
}

module.exports = Routes;