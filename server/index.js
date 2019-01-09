var app = require("express")();
var http = require("http").Server(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname, "../src/index.html");
});

http.listen(8080, () => {
  console.log("<=====LISTENING ON PORT 7777====>");
});
