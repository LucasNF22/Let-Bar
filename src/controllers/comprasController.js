const path = require("path");
const fs = require('fs');
const { validationResult } = require("express-validator");

const db = require("../database/models");


const comprasController = {

    carritoDesplegable: (req, res) => {
        res.render(path.join(__dirname,"../views/Carrito-desplegable"));
    },
    checkOut:(req, res) => {
        
        let userData = 
        
        db.User.findByPk()
        
        res.render("check-out");

    },

}

module.exports = comprasController