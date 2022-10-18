const express = require('express');

const port = 3000;
const app = express()

const firstMiddleware = (req, res, next) => {
    console.log("This is First  Middleware")
    next()
}

const secondMiddleware = (req, res, next) => {
    console.log("This is Second Middleware")
    next()
}
app.use(firstMiddleware);
app.get("/", (req, res) => {
    res.send("<h1 style = 'color:red'>Hello Everyone<h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1 style = 'color:red'>This is About Page<h1>")
})

app.get("/section", secondMiddleware, (req, res) => {
    res.send("<h1 style = 'color:red'>Currently we are at the Second Middleware</h1>")
})

app.get("/contact", secondMiddleware, (req, res) => {
    res.send("<h1 style = 'color:red'> Contact Us</h1>")
})

app.listen(port);