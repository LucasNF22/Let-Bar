function usuarioLogueadoMiddleware(req,res, next) {
    res.locals.estaLogueado = false ;

    let cookieEmail = req.cookies.emailUsuario;
    
    if(cookieEmail){
      res.locals.emailUsuario = cookieEmail
    }


    if (req.session.usuarioLogueado) {
      res.locals.estaLogueado = true;
      res.locals.usuarioLogueado = req.session.usuarioLogueado
    }

    
    
    
 
    next();

}

module.exports = usuarioLogueadoMiddleware