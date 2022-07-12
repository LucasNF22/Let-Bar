

    let form = document.getElementById("direcciones");

    let selectProvince = document.getElementById("province");
    let selectLocality = document.getElementById("locality");
    let inputStreet = document.getElementById("street");
    let inputStreet_number = document.getElementById("street_number");
    let msgError = document.getElementById("msgError")
    //console.log(selectProvince.value)
    //console.log(inputLocality)
    
    let bsas = '<option value="Capital Federal"> Capital Federal </option>' +
        '<option value="Gran Bs. As."> Gran Bs, As. </option>' +
        '<option value="Zona Oeste"> Zona Oeste </option>'

    let mend = '<option value="Mendoza Capital">' + 'Mendoza Capital' + '</option>' +
        '<option value="Uspallata">' + 'Uspallata' + '</option>' +
        '<option value="San Rafael">' + 'San Rafael' + '</option>' +
        '<option value="Tupungato">' + 'Tupungato' + '</option>'
    
    cargaLocalidad();

    function cargaLocalidad(){
        if (selectProvince.value === "Buenos Aires") {

            selectLocality.innerHTML = bsas;

        } else if (selectProvince.value === "Mendoza") {

            selectLocality.innerHTML = mend;
        }
    }   

    selectProvince.addEventListener("click", () => {

        if (selectProvince.value === "Buenos Aires") {

            selectLocality.innerHTML = bsas;

        } else if (selectProvince.value === "Mendoza") {

            selectLocality.innerHTML = mend;
        }

        //console.log(inputProvince.value);
        //console.log(inputLocality.value);
    })

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        console.log(selectProvince.value)
        console.log(selectLocality.value)
        console.log(inputStreet.value)
        console.log(inputStreet_number.value)

        if(selectProvince.value && selectLocality.value && inputStreet.value && inputStreet_number.value ){
            msgError.innerHTML = ""
            
                province = selectProvince.value,
                locality= selectLocality.value,
                street= inputStreet.value,
                street_number= inputStreet_number.value
            
            localStorage.clear()
            localStorage.setItem("address", "true");
            localStorage.setItem("province", selectProvince.value);
            localStorage.setItem("locality", selectLocality.value);
            localStorage.setItem("street", inputStreet.value);
            localStorage.setItem("street_number", inputStreet_number.value);

           
           form.submit();
        }else{
            msgError.innerHTML = '<h4 class="feedback"> Introduce tu dirección</h4>'
        }

    })


