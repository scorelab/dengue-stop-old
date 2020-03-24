let express = require('express'),
    app = express(),
    http = require('http').Server(app).listen(3000);
console.log("Server started at port 3000")

app.use("/css", express.static("./css"))
app.use("/img", express.static("./img"))
app.use("/js", express.static("./js"))
app.get("/", function(req, res){
    res.sendFile(__dirname+'/index.html');
})



