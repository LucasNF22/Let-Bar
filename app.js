const express = require ("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");

let routesMain=require("./src/routes/main.js");
let routesProductos = require("./src/routes/productos.js");
let routesUsers= require ("./src/routes/users.js")


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor listo en el puerto 3000...");
} );



app.use ("/", routesMain);
app.use("/productos", routesProductos);
app.use("/users", routesUsers);




app.get ("/carrito", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/carrito-desplegable.html"));
});

app.get ("/check-out", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/check-out.html"));
});
