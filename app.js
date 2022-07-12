const express = require ("express");
const path = require("path");
const app = express();
const methodOverride =  require('method-override');
const session = require('express-session');
const cookie = require("cookie-parser");

const usuarioLogueadoMiddleware = require ('./src/middlewares/usuarioLogueadoMiddleware')

app.use(express.urlencoded ({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set("view engine","ejs");


app.use(session({ 
        secret:"Mensaje Secreto", 
        resave: false, 
        saveUninitialized: true,
    }));

app.use(cookie());
app.use (usuarioLogueadoMiddleware);

let routesMain = require("./src/routes/main.js");
const req = require("express/lib/request");

app.set('views', path.resolve(__dirname, './src/views')); 
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

/* app.listen(3000, () =>{
    console.log("Servidor listo en el puerto 3000...");
}) ; */

app.listen(process.env.PORT || 3001, () =>{
    console.log("Servidor listo en el puerto 3001...");
} );



app.use ("/", routesMain);


/*app.use((req, res, next)=>{
    res.status(404).render("error-404")
})*/
