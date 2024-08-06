import http from "http";
import SocketService from "./services/socket";

async function startServer() {
    const socketService =new SocketService();

    const server =http.createServer();

    socketService.io.attach(server);
    
    server.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}