const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// our localhost port
const port = process.env.PORT || 3001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

let initData = [
  {
    id: 1,
    sender: "1",
    message: "Hello"
  },
  {
    id: 2,
    sender: "2",
    message: "Hi"
  },
  {
    id: 3,
    sender: "1",
    message: "How are you?"
  },
  {
    id: 4,
    sender: "2",
    message: "Fine. What about you?"
  },
  {
    id: 5,
    sender: "1",
    message: "I am also fine. Thanks for asking."
  },
  {
    id: 6,
    sender: "2",
    message: "What's Up!!"
  },
  {
    id: 7,
    sender: "2",
    message: "I was thinking about a meetup?"
  },
  {
    id: 8,
    sender: "2",
    message: "What do you say?"
  },
  {
    id: 9,
    sender: "1",
    message: "On karo scene. I am inn"
  },
  {
    id: 10,
    sender: "1",
    message: "Ma bakio se pouch k batata hun"
  },
  {
    id: 11,
    sender: "2",
    message: "Okay. Waiting .."
  }
];

io.on("connection", socket => {
  console.log("New client connected" + socket.id);
  //console.log(socket);

  // Returning the initial data of food menu from FoodItems collection
  socket.on("initial_data", () => {
    // collection_foodItems.find({}).then(docs => {
    //   io.sockets.emit("get_data", docs);
    // });
    io.sockets.emit("get_data", initData);
  });

  // Order completion, gets called from /src/main/Kitchen.js
  socket.on("new_message", message => {
    console.log("Recieved New Message", message);
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend */

app.use(express.static("build"));

server.listen(port, () => console.log(`Listening on port ${port}`));
