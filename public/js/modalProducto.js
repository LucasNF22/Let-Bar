window.onload = function () {

    // Se capturan las variables -------------
    
    

    // Se captura el formulario
    let form = document.querySelector(".FormCarga");





    form.addEventListener("submit", (e) => {

        e.preventDefault();

  


        // Si no hay errores se hace el submit del formulario
        if (AcuErrors === 0) {
            form.submit();
        }

    })

}