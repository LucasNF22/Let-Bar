window.onload = function () {

    // Se capturan las variables -------------
    let inputFirstName = document.getElementById("first_name");
    let inputLastName = document.getElementById('last_name');
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById('password');
    let inputPassConfirm = document.getElementById('passConfirm');
    let inputTelefono = document.getElementById("tel");
    let inputFechaNacimiento = document.getElementById('birthday');
    let inputAvatar = document.getElementById('avatar');
    

    // Se captura el formulario
    let form = document.querySelector(".FormCarga");

    // Se capturan los Ul de errores -------------
    let firstNameErrors = document.getElementById("firstNameErrors");
    let lastNameErrors = document.getElementById('lastNameErrors');
    let emailErrors = document.getElementById("emailErrors");
    let passwordErrors = document.getElementById('passwordsErrors');
    let passConfirmErrors = document.getElementById("passConfirmErrors");
    let telefonoErrors = document.getElementById('telefonoErrors');
    let fechaNaciminetoErrors = document.getElementById("fechaNacimientoErrors");
    let avatarErrors = document.getElementById('avatarErrors');

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // Se inicializan los Arr de errores -------------
        let firstNameErrorsAcu = 0;
        let lastNameErrorsAcu = 0;
        let emailErrorsAcu =0;
        let passwordErrorsAcu = 0;
        let passConfirmErrorsAcu = 0;
        let telefonoErrorsAcu = 0;
        let fechaNacimientoErrorsAcu = 0;
        let avatarErrorsAcu = 0;

         // Se definen las validaciones -------------

        // Validaciones de First Name
        if (inputFirstName.value === "") {
            firstNameErrors.innerHTML = "";
            firstNamelErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre " + '</li>';
            emailErrorsAcu++;
        } else {
            firstNamelErrors.innerHTML = "";
            firstNameErrorsAcu = 0;
        }

        // Validaciones de Last Name
        if (inputLasttName.value === "") {
            lastNameErrors.innerHTML = "";
            lastNamelErrors.innerHTML += '<li class="feedback">' + "Debes introducir un apellido " + '</li>';
            lastNameErrorsAcu++;
        } else {
            lastNameErrors.innerHTML = "";
            lastNameErrorsAcu = 0;
        }

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
            passwordErrors.innerHTML = "";
            passwordErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passwordErrorsAcu++;
        } else if (inputPassword.value.length < 3) {
            passwordsErrors.innerHTML = ""
            passwordErrorsAcu++;
            passwordErrors.innerHTML += '<li class="feedback">' + "introducir una contraseña mas larga" + '</li>'
        } else {
            passwordsErrors.innerHTML = "";
            passwordsErrorsAcu = 0
        }

        // Validaciones de Pass Confirm
        if (inputPassConfirmvalue === "") {
            passConfirmErrors.innerHTML = "";
            passConfirmErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passConfirmErrorsAcu++;
        } else if (inputPassConfirm.value.length < 3) {
            passConfirmErrors.innerHTML = ""
            passConfirmErrorsAcu++;
            passConfimrErrors.innerHTML += '<li class="feedback">' + "introducir una contraseña mas larga" + '</li>'
        } else {
            passConfirmErrors.innerHTML = "";
            passConfirmErrorsAcu = 0
        }


        // Validaciones de Telefono
        if (inputTelefono.value === "") {
            telefonoErrors.innerHTML = "";
            telefonoErrors.innerHTML += '<li class="feedback">' + "Debes introducir una teléfono" + '</li>';
            passwordsErrorsAcu++;
        } else if (inputTelefono.value.length < 3) {
            telefonoErrors.innerHTML = ""
            telefonoErrorsAcu++;
            telefonoErrors.innerHTML += '<li class="feedback">' + " Debes introducir un teléfono válido" + '</li>'
        } else {
            telefonoErrors.innerHTML = "";
            telefonoErrorsAcu = 0
        }

            // Validaciones de Fecha de Nacimiento
            if ((inputFechaNacimiento.value.length =! 4) && (inputFechaNacimiento.value != "")) {
                fechaNacimientoErrors.innerHTML = "";
                fechaNacimientoErrors.innerHTML += '<li class="feedback">' + "Debes introducir un año correcto Ej: 2003" + '</li>';
                fechaNacimientoErrorsAcu++;
            } else {
                fechaNacimientoErrors.innerHTML = "";
                fechaNacimientoErrorsAcu = 0;
            }


        // Validaciones de Avatar
        let avatar = inputImagen.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = imagen.substring(imagen.lastIndexOf('.'),imagen.length);
        console.log(fileExtension) 
        
        if (inputAvatar.value === "") {    
            avatarErrors.innerHTML = "";
            avatarErrors.innerHTML += '<li class="feedback">' + "Debes introducir una imagen" + '</li>';
            avatarErrorsAcu++;
        } else if (!extensionesValidas.includes(fileExtension)){
            avatarErrors.innerHTML = "";
            avatarErrors.innerHTML += '<li class="feedback">' + `Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}` + '</li>';
            avatarErrorsAcu++;
        }
        else {
            avatarErrors.innerHTML = "";
            avatarErrorsAcu = 0;
        }

         // Se suman los acumuladores de errores ------------------
         let AcuErrors =
         firstNameErrorsAcu +
         lastNameErrorsAcu +
         emailErrorsAcu +
         passwordsErrorsAcu +
         passConfirmErrorsAcu +
         telefonoErrorsAcu +
         fechaNacimientoErrorsAcu + 
         avatarErrorsAcu +


         console.log(inputImagen.value);


         // Si no hay errores se hace el submit del formulario
         if (AcuErrors === 0) {
             form.submit();
         }
 
     })
 
 }