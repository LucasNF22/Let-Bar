const express = require ("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(3000, () =>{
    console.log("Servidor listo en el puerto 3000...");
} );


app.get ("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home-sin-loguear.html"));
});

app.get ("/carrito", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/carrito-desplegable.html"));
});

app.get ("/home", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home-logueado.html"));
});

app.get ("/catalogo", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/catalogo.html"));
});

app.get ("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get ("/check-out", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/check-out.html"));
});
