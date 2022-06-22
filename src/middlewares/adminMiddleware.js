function adminMiddleware (req, res, next){
    if (!(req.session.usuarioLogueado && (req.session.usuarioLogueado.category_id == 2))){
         return res.redirect('/home');
      }
      next();
   }
      
     module.exports = adminMiddleware;