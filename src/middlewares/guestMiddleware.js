function guestMiddleware (req, res, next){
if (req.session.usuarioLogueado){
    return res.redirect('/users/perfil');
}
next();
}

module.exports = guestMiddleware