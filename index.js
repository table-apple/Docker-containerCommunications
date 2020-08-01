const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

client.set("visits", 0);

app.get("/", function (request, response) {
    client.get("visits", function (error, visitsReturned){
        response.send("Number of visits is " + visits);
        client.set("visits", parseInt(visitsReturned) + 1);
    });
});

app.listen(8081, function(){
    console.log("Server listening at port 8081...\n");
});