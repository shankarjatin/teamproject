const express = require("express");
const app = express();

app.get("/" , function(request , response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/" , function(request , response){
    response.send("thanks for posting that");
});



app.listen(3000 , function(){console.log("server started on port 3000");});