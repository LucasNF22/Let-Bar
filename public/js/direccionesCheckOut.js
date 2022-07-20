

    let alias = document.getElementById("alias");
    
    let province = document.getElementById("province");
    let locality = document.getElementById("locality");
    let street = document.getElementById("street")
    
            
    cargaDireccion();

    function cargaDireccion(){
        if (alias.value === "ca") {

            province.innerHTML = "Provincia: Buenos Aires";
            locality.innerHTML = "Localidad: Zona Oeste";
            street.innerHTML = "Calle: Av. Siempre viva, N°123";

        } 
    }   

    alias.addEventListener("click", () => {

        if (alias.value === "ca") {

            province.innerHTML = "Provincia: Buenos Aires";
            locality.innerHTML = "Localidad: Zona Oeste";
            street.innerHTML = "Calle: Av. Siempre viva, N°123";

        } else if (alias.value === "tr"){
            province.innerHTML = "Provincia: Buenos Aires";
            locality.innerHTML = "Localidad: Capital Federal";
            street.innerHTML = "Calle: Wallaby N°42.";
        }

        
    })

    
    
