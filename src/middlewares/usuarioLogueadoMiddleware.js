function usuarioLogueadoMiddleware(req,res, next) {
    res.locals.estaLogueado = false ;

    if (req.session.usuarioLogueado) {
      res.locals.estaLogueado = true
    }
 
    next();

}

module.exports = usuarioLogueadoMiddleware