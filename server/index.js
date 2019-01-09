var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname, "../src/index.html");
});

io.on("connection", socket => {
  console.log("<===A USER CONNECTED===>");
});

http.listen(8080, () => {
  console.log("<=====LISTENING ON PORT 7777====>");
});
