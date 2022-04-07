const express = require ("express");
const path = require("path");
let routesMain=require("./src/routes/main.js");
const app = express();


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(3000, () =>{
    console.log("Servidor listo en el puerto 3000...");
} );

app.set("view engine","ejs");

app.use ("/", routesMain);

app.get ("/carrito", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/carrito-desplegable.html"));
});


app.get ("/catalogo", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/catalogo.html"));
});

app.get ("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get ("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get ("/check-out", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/check-out.html"));
});
app.get ("/detalle-producto", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/detalle-producto.html"));
});
