
let prod_price = document.getElementById("prod_price");
let prod_size = document.getElementById("prod_size");
let prod_valoration = document.getElementById("prod_valoration");
let prod_description = document.getElementById("prod_description");
let prod_image = document.getElementById("prod_image");
let prod_form_val = document.getElementById("form-val-mod");
let prod_detail = document.getElementById("prod_detail");



document.querySelectorAll("label.click-para-modal").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");

        localStorage.removeItem("productoModal")
        fetch('http://localhost:3001/api/products/detail/' + id)
            .then(respuesta => { return respuesta.json() })
            .then(function (data) {
                let dato = JSON.stringify(data)
                localStorage.setItem("productoModal", dato)

                let productoMod = JSON.parse(localStorage.productoModal)

                prod_price.innerHTML = "$" + productoMod.data.priceUnit
                prod_size.innerHTML = productoMod.data.size
                prod_valoration.innerHTML =  `<i class="fa-regular fa-star"></i>`+ " " + productoMod.data.valoration 
                prod_description.innerHTML = productoMod.data.description
                prod_image.innerHTML = `
                                        <img src="/img/products/${productoMod.data.image}"   class="img-popUp">
                                            <div class="tit-popUp">
                                                
                                                  ${productoMod.data.name}
                                                
                                            </div>`
                prod_form_val.action = `http://localhost:3001/productos/valorar/${productoMod.data.id}?_method=PUT`
                prod_detail.href = `http://localhost:3001/productos/detalle-producto/${productoMod.data.id}`
                
            })



       
        
    });
});

