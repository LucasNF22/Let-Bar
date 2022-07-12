
    // Se capturan las variables -------------
    let inputName = document.getElementById("name");
    let inputBrand = document.getElementById('brand');
    let inputTamaño = document.getElementById('size');
    let inputCosecha = document.getElementById('years');
    let inputPrecioUnd = document.getElementById('priceUnit');
    let inputPrecioCant = document.getElementById('priceCant');
    let inputCantDesc = document.getElementById('cantDisc');
    let inputGraduacion = document.getElementById('graduation');
    let inputStock = document.getElementById('stock');
    let inputDescripcion = document.getElementById('description');
    let inputImagen = document.getElementById('image');

    // Se captura el formulario
    let form = document.querySelector(".FormCarga");


    // Se capturan los Ul de errores -------------
    let nameErrors = document.getElementById("nameErrors");
    let brandErrors = document.getElementById('brandErrors');
    let tamañoErrors = document.getElementById('sizeErrors');
    let cosechaErrors = document.getElementById('yearsErrors');
    let precioUndErrors = document.getElementById('priceUnitErrors');
    let precioCantErrors = document.getElementById('priceCantErrors');
    let cantDescErrors = document.getElementById('cantDiscErrors');
    let graduacionErrors = document.getElementById('graduationErrors');
    let stockErrors = document.getElementById('stockErrors');
    let descripcionErrors = document.getElementById('descriptionErrors');
    let imagenErrors = document.getElementById('imageErrors');



    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // Se inicializan los Arr de errores -------------
        let nameErrorsAcu = 0;
        let brandErrorsAcu = 0;
        let tamañoErrorsAcu = 0;
        let cosechaErrorsAcu = 0;
        let precioUndErrorsAcu = 0;
        let precioCantErrorsAcu = 0;
        let cantDescErrorsAcu = 0;
        let graduacionErrorsAcu = 0;
        let stockErrorsAcu = 0;
        let descripcionErrorsAcu = 0;
        let imagenErrorsAcu = 0;


        // Se definen las validaciones -------------

        // Validaciones de Nombre
        if (inputName.value === "") {
            nameErrors.innerHTML = "";
            nameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre" + '</li>';
            nameErrorsAcu++;
        }else if(inputName.value.length < 5){
            nameErrors.innerHTML = "";
            nameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre más largo" + '</li>';
            nameErrorsAcu++;
        } else {
            nameErrors.innerHTML = "";
            nameErrorsAcu = 0;
        }

        // Validaciones de Marca
        if (inputBrand.value === "") {
            brandErrors.innerHTML = "";
            brandErrors.innerHTML += '<li class="feedback">' + "Debes introducir una marca" + '</li>';
            brandErrorsAcu++;
        } else {
            brandErrors.innerHTML = "";
            brandErrorsAcu = 0
        }

        // Validaciones de Tamaño
        if (inputTamaño.value === "") {
            tamañoErrors.innerHTML = "";
            tamañoErrors.innerHTML += '<li class="feedback">' + "Debes introducir un tamaño" + '</li>';
            tamañoErrorsAcu++;
        } else {
            tamañoErrors.innerHTML = "";
            tamañoErrorsAcu = 0;
        }

        // Validaciones de cosecha
        if ((inputCosecha.value.length != 4) && (inputCosecha.value != "")) {
            cosechaErrors.innerHTML = "";
            cosechaErrors.innerHTML += '<li class="feedback">' + "Debes introducir un año correcto Ej: 2003" + '</li>';
            cosechaErrorsAcu++;
        } else {
            cosechaErrors.innerHTML = "";
            cosechaErrorsAcu = 0;
        }

        // Validaciones de precio
        if (inputPrecioUnd.value === "") {
            precioUndErrors.innerHTML = "";
            precioUndErrors.innerHTML += '<li class="feedback">' + "Debes introducir un precio" + '</li>';
            precioUndErrorsAcu++;
        } else {
            precioUndErrors.innerHTML = "";
            precioUndErrorsAcu = 0;
        }

        // Validaciones de precio por cantidad
        if (inputPrecioCant.value === "") {
            precioCantErrors.innerHTML = "";
            precioCantErrors.innerHTML += '<li class="feedback">' + "Debes introducir un precio por cantidad" + '</li>';
            precioCantErrorsAcu++;
        } else {
            precioCantErrors.innerHTML = "";
            precioCantErrorsAcu = 0;
        }

        // Validaciones de cantidad para descuento
        if (inputCantDesc.value === "") {
            cantDescErrors.innerHTML = "";
            cantDescErrors.innerHTML += '<li class="feedback">' + "Debes introducir una cantidad para el descuento" + '</li>';
            cantDescErrorsAcu++;
        } else {
            cantDescErrors.innerHTML = "";
            cantDescErrorsAcu = 0;
        }

        // Validaciones de graduacion
        if (inputGraduacion.value === "") {
            graduacionErrors.innerHTML = "";
            graduacionErrors.innerHTML += '<li class="feedback">' + "Debes introducir la graduación del producto" + '</li>';
            graduacionErrorsAcu++;
        } else {
            graduacionErrors.innerHTML = "";
            graduacionErrorsAcu = 0;
        }

        // Validaciones de Stock
        if (inputStock.value === "") {
            stockErrors.innerHTML = "";
            stockErrors.innerHTML += '<li class="feedback">' + "Debes introducir un stock de producto" + '</li>';
            stockErrorsAcu++;
        } else {
            stockErrors.innerHTML = "";
            stockErrorsAcu = 0;
        }

        // Validaciones de descripcion
        if (inputDescripcion.value === "") {
            descripcionErrors.innerHTML = "";
            descripcionErrors.innerHTML += '<li class="feedback">' + "Debes introducir una descripción" + '</li>';
            descripcionErrorsAcu++;
        }else if(inputDescripcion.value.length < 20){
            descripcionErrors.innerHTML = "";
            descripcionErrors.innerHTML += '<li class="feedback">' + "Debes introducir una descripción más larga" + '</li>';
            descripcionErrorsAcu++;
        } else {
            descripcionErrors.innerHTML = "";
            descripcionErrorsAcu = 0;
        }

        // Validaciones de imagen
        let imagen = inputImagen.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = imagen.substring(imagen.lastIndexOf('.'),imagen.length);
        
        
        if (inputImagen.value === "") {    
            imagenErrors.innerHTML = "";
            imagenErrors.innerHTML += '<li class="feedback">' + "Debes introducir una imagen" + '</li>';
            imagenErrorsAcu++;
        } else if (!extensionesValidas.includes(fileExtension)){
            imagenErrors.innerHTML = "";
            imagenErrors.innerHTML += '<li class="feedback">' + `Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}` + '</li>';
            imagenErrorsAcu++;
        }
        else {
            imagenErrors.innerHTML = "";
            imagenErrorsAcu = 0;
        }


        // Se suman los acumuladores de errores ------------------
        let AcuErrors =
            nameErrorsAcu +
            brandErrorsAcu +
            tamañoErrorsAcu +
            cosechaErrorsAcu +
            precioUndErrorsAcu +
            precioCantErrorsAcu +
            cantDescErrorsAcu +
            graduacionErrorsAcu +
            stockErrorsAcu +
            descripcionErrorsAcu +
            imagenErrorsAcu;

        // Si no hay errores se hace el submit del formulario
        if (AcuErrors === 0) {
            form.submit();
        }

    })

