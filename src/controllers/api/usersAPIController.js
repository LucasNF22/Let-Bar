const db = require('../../database/models');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll({include : ["categories", "addresses"]})
            .then(users => {

                let usuariosArray = [];

                users.forEach(users => {
                    let data = {
                        id: users.id,
                        first_name: users.first_name,
                        last_name: users.last_name,
                        email: users.email,
                        category: users.categories,
                        urlImage : "http://localhost:3001/img/users/avatar/" + users.avatar ,
                        detail: "/api/users/" + users.id

                    }
                    usuariosArray.push(data)
                })

                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/users"
                    },
                    count: users.length,
                    data: usuariosArray
                }
                res.json(respuesta);
            })
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id, {
            include : ["categories", "addresses"]

        }) 
            .then(user => {
                delete user.dataValues.password
                let urlImage = "http://localhost:3001/img/users/avatar/" + user.avatar 
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/users/" + user.id
                    },
                    data: {user, urlImage}
                }
                res.json(respuesta)
            })

    }
}

module.exports = usersAPIController