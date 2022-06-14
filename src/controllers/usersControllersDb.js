const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");


const db = require("../database/models");



const usersControllersDb = {
    registro: function (req, res) {
        db.users.findAll()
            .then(function (users) {
                console.log(users);
                return res.send(users)
            })

    },

    procesarRegistro: function (req, res) {
        db.users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            tel: req.body.tel,
            birthday: req.body.birthday,
            avatar: req.file.avatar,

        })
        res.redirect("/users")
    },

    listadoUsuarios: function (req, res) {
        db.users.findAll()
            .then(function (users) {
                res.render("listadoDeUsuarios", { users: users })
            })
    },

    perfil: function (req, res) {
        db.perfil.findByPK(req.params.id)
            .then(function (users) {
                res.render("perfil", { users: users })
            })
    }
}



module.exports = usersControllersDb