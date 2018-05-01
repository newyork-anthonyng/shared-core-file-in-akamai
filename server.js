const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/", (req, res) => {
    res.redirect("/a");
})

app.get("/akamai/:filename", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist/commons", req.params.filename));
})

app.get("/a", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist/a/index.html"));
})

app.get("/b", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist/b/index.html"));
})

app.get("/c", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist/c/index.html"));
})

app.listen(8000, () => {
    console.log("Listening on 8000");
})