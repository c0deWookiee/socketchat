const express = require("express");

const app = express();
var server = app.listen(8083, () =>
  console.log("catch the action @ port  => 8083")
);
const io = require("socket.io").listen(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("<===A USER CONNECTED===>");
});

// http.listen(9001, () => {
//   console.log(`<=====LISTENING ON PORT 8084====>`);
// });
