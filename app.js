const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const managersRoute = require("./routes/managerRoute");
const agentsRoute = require("./routes/agentRoute");
const ordersRoute = require("./routes/orderRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

app.use("/api/managers", managersRoute);
app.use("/api/agents", agentsRoute);
app.use("/api/orders", ordersRoute);

// Set up the server and Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for simplicity
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Make Socket.IO instance accessible globally
app.set("io", io);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}`));
