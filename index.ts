import Server from "./clases/server";
import router from "./routes/router";


const server = new Server();
server.middleware();
server.app.use('/', router);
server.start(
    () => {console.log(`Server running in the port ${server.port}`)}
);