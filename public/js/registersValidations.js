window.onload = function () {

    // Se capturan las variables -------------
    let inputFirstName = document.getElementById("first_name");
    let inputLastName = document.getElementById('last_name');
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById('password');
    let inputPassConfirm = document.getElementById('pass_confirm');
    let inputTelefono = document.getElementById("tel");
    let inputFechaNacimiento = document.getElementById('birthday');
    let inputAvatar = document.getElementById('avatar');
    

   // Se captura el formulario
   let form = document.getElementById("formulario");

    // Se capturan los Ul de errores -------------
    let firstNameErrors = document.getElementById("firstNameErrors");
    let lastNameErrors = document.getElementById('lastNameErrors');
    let emailErrors = document.getElementById("emailErrors");
    let passwordErrors = document.getElementById('passwordsErrors');
    let passConfirmErrors = document.getElementById("passConfirmErrors");
    let telefonoErrors = document.getElementById('telefonoErrors');
    let fechaNacimientoErrors = document.getElementById("fechaNacimientoErrors");
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
            firstNameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre " + '</li>';
            emailErrorsAcu++;
        } else {
            firstNameErrors.innerHTML = "";
            firstNameErrorsAcu = 0;
        }

        // Validaciones de Last Name
        if (inputLastName.value === "") {
            lastNameErrors.innerHTML = "";
            lastNameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un apellido " + '</li>';
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
        if (inputPassword.value === "") {
            passwordErrors.innerHTML = "";
            passwordErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passwordErrorsAcu++;
        } else if (inputPassword.value.length < 3) {
            passwordErrors.innerHTML = ""
            passwordErrorsAcu++;
            passwordErrors.innerHTML += '<li class="feedback">' + "introducir una contraseña mas larga" + '</li>'
        } else {
            passwordErrors.innerHTML = "";
            passwordErrorsAcu = 0
        }

        // Validaciones de Pass Confirm
        if (inputPassConfirm.value === "") {
            passConfirmErrors.innerHTML = "";
            passConfirmErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passConfirmErrorsAcu++;
        } else if (inputPassConfirm.value.length < 8) {
            passConfirmErrors.innerHTML = ""
            passConfirmErrorsAcu++;
            passConfirmErrors.innerHTML += '<li class="feedback">' + "introducir una contraseña mas larga" + '</li>'
        } else {
            passConfirmErrors.innerHTML = "";
            passConfirmErrorsAcu = 0
        }


        // Validaciones de Telefono
        if (inputTelefono.value === "") {
            telefonoErrors.innerHTML = "";
            telefonoErrors.innerHTML += '<li class="feedback">' + "Debes introducir una teléfono" + '</li>';
            telefonoErrorsAcu++;
        } else if (inputTelefono.value.length < 3) {
            telefonoErrors.innerHTML = ""
            telefonoErrorsAcu++;
            telefonoErrors.innerHTML += '<li class="feedback">' + " Debes introducir un teléfono válido" + '</li>'
        } else {
            telefonoErrors.innerHTML = "";
            telefonoErrorsAcu = 0
        }

            // Validaciones de Fecha de Nacimiento
            if (inputFechaNacimiento.value === "") {
                fechaNacimientoErrors.innerHTML = "";
                fechaNacimientoErrors.innerHTML += '<li class="feedback">' + "Debes introducir tu fecha de nacimiento" + '</li>';
                fechaNacimientoErrorsAcu++;
            } else {
                fechaNacimientoErrors.innerHTML = "";
                fechaNacimientoErrorsAcu = 0;
            }


        // Validaciones de Avatar
        let avatar = inputAvatar.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = avatar.substring(avatar.lastIndexOf('.'),avatar.length);
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
         passwordErrorsAcu +
         passConfirmErrorsAcu +
         telefonoErrorsAcu +
         fechaNacimientoErrorsAcu + 
         avatarErrorsAcu +


         console.log(inputAvatar.value);


         // Si no hay errores se hace el submit del formulario
         if (AcuErrors === 0) {
             form.submit();
         }
 
     })
 
 }