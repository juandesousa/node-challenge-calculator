const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

// app.get('/add', (req, res) => {
//     const value1 = parseInt(req.query.value1)
//     const value2 = parseInt(req.query.value2)
//     res.send(`La suma de ${value1} y ${value2} = ${value1+value2}`)
// }) 

// app.get('/substract', (req, res) => {
//     const value1 = parseInt(req.query.value1)
//     const value2 = parseInt(req.query.value2)
//     res.send(`La resta de ${value1} y ${value2} = ${value1-value2}`)
// }) 

// app.get('/multiply', (req, res) => {
//     const value1 = parseInt(req.query.value1)
//     const value2 = parseInt(req.query.value2)
//     res.send(`La multiplicacion de ${value1} y ${value2} = ${value1*value2}`)
// }) 

// app.get('/divide', (req, res) => {
//     const value1 = parseInt(req.query.value1)
//     const value2 = parseInt(req.query.value2)
//     res.send(`La division de ${value1} y ${value2} = ${value1/value2}`)
// }) 

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);
  
app.get("/add/:value1/:value2", (req,res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`La suma de ${value1} y ${value2} = ${value1+value2}`)
})

app.get("/substract/:value1/:value2", (req,res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`La resta de ${value1} y ${value2} = ${value1-value2}`)
})

app.get("/multiply/:value1/:value2", (req,res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`La multiplicacion de ${value1} y ${value2} = ${value1+value2}`)
})

app.get("/divide/:value1/:value2", (req,res) => {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`La division de ${value1} y ${value2} = ${value1+value2}`)
})


app.listen(3000, () => console.log("Server is up and running"))