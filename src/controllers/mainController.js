const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const mainController = {
    homeLogueado:(req, res) => {
        
        //console.log(categories);
        
        res.render(path.join(__dirname,"../views/Home-logueado"), {categorias: categories, productos: products});

        
    },
    home:(req, res) => {
        res.render(path.join(__dirname,"../views/Home-sin-loguear"));

    },
};
 
module.exports = mainController;
