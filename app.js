const express = require ("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");

let routesMain=require("./src/routes/main.js");
let routesProductos = require("./src/routes/productos.js");
let routesUsers= require ("./src/routes/users.js");
let routesCompras = require ("./src/routes/compras.js");



const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor listo en el puerto 3000...");
} );



app.use ("/", routesMain);
app.use("/productos", routesProductos);
app.use("/users", routesUsers);
app.use("/compras", routesCompras);

