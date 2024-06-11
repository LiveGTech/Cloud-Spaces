/*
    Cloud Spaces

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.net
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

const express = require("express");

var app = express();

app.get("/", function(request, response, next) {
    if (request.header("host") == "liveg.net") {
        response.redirect("https://liveg.tech");

        return;
    }

    next();
});

app.get("/test", function(request, response) {
    response.send({
        host: request.header("host")
    });
});

app.use("/static", express.static("static"));

app.use(function(request, response, next) {
    response.status(404);

    response.redirect("/static/404.html");
});

app.listen(process.argv[2], function() {
    console.log(`LiveG Cloud Spaces started on port ${process.argv[2]}`);
});