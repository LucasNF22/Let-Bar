window.onload = function () {

    // Se capturan las variables -------------
    let inputEmail = document.getElementById("email");
    let inputPasswords = document.getElementById('password');
    

    // Se captura el formulario
    let form = document.querySelector(".FormCarga");

    // Se capturan los Ul de errores -------------
    let nameErrors = document.getElementById("emailErrors");
    let brandErrors = document.getElementById('passwordsErrors');

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // Se inicializan los Arr de errores -------------
        let emailErrorsAcu = 0;
        let passwordErrorsAcu = 0;

         // Se definen las validaciones -------------

        // Validaciones de Email
        if (inputEmail.value === "") {
            emailErrors.innerHTML = "";
            emailErrors.innerHTML += '<li class="feedback">' + "Debes introducir un email" + '</li>';
            emailErrorsAcu++;
        } else {
            emailErrors.innerHTML = "";
            emailErrorsAcu = 0;
        }

        // Validaciones de Passwords
        if (inputPasswordsvalue === "") {
            passwordsErrors.innerHTML = "";
            passwordsErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passwordsErrorsAcu++;
        } else if (inputBrand.value.length < 3) {
            passwordsErrors.innerHTML = ""
            passwordsErrorsAcu++;
            brandErrors.innerHTML += '<li class="feedback">' + "introducir una contraseña mas larga" + '</li>'
        } else {
            passwordsErrors.innerHTML = "";
            passwordsErrorsAcu = 0
        }

         // Se suman los acumuladores de errores ------------------
         let AcuErrors =
         emailErrorsAcu +
         passwordsErrorsAcu +

         console.log(inputImagen.value);


         // Si no hay errores se hace el submit del formulario
         if (AcuErrors === 0) {
             form.submit();
         }
 
     })
 
 }