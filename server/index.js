const express = require("express");
const app = express();
const parser = require("body-parser");
const path = require("path");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/../build"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../build/index.html"));
// });

const Server = require("http").Server(app);
Server.listen(8080, () => console.log("<=====LISTENING ON PORT 8080====>"));

const io = require("socket.io")(Server);
io.on("connection", socket => {
  console.log("<===A USER CONNECTED===>");

  socket.on("click", button => {
    console.log(button);
    socket.broadcast.emit("broadcast", button);
  });

  socket.on("typing", socket => {
    console.log("a user is typing");
  });

  socket.on("chatMessage", message => {
    console.log("message was emitted");
  });

  socket.on("disconnect", () => {
    console.log("===>A USER DISCONNECTED<===");
  });
});
