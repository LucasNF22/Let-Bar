const path = require("path")
const usersControllers = {
    registro: (req, res) => {
        res.render (path.join(__dirname, "../views/register"))
    },

    login: (req, res) => {
        res.render (path.join (__dirname, "../views/login"))
    },

    control: (req, res) => {
        res.render(path.join(__dirname, "../views/control"))
    }
}

module.exports = usersControllers;