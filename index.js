'use strict'


const PORT = process.env.PORT || 3000;

var app = require('./app');

app.listen(PORT, ()=>{
    console.log("Corriendo desde: " + PORT);
});