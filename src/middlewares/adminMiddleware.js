function adminMiddleware (req, res, next){
    if (!(req.session.usuarioLogueado && (req.session.usuarioLogueado.category == "admin"))){
         return res.redirect('/home');
      }
      next();
   }
      
     module.exports = adminMiddleware;