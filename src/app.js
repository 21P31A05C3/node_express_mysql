const Server = require('./core/server.js');
const Routes = require('./routes/index.js');

const server = new Server();
const routes = new Routes();

// Generate REST API routes
routes.generate(server);

// Start creating and running the server.
server.start((data) => {
    console.log(`Server running on port: ${server.port}`);
});
