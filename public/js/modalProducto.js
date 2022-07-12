

document.querySelectorAll("label.click-para-modal").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");

        fetch("http://localhost:3000/api/products")
        .then(respuesta =>{ return respuesta.json()})
        .then(function(data){
            let dato = JSON.stringify(data)
            localStorage.setItem("productoModal", dato )
        })
        let productoMod = JSON.parse(localStorage.productoModal)
        console.log(productoMod);
        console.log(id)
        // localStorage.removeItem('modal');
        // localStorage.setItem('modal', id);
        // console.log("modal" + localStorage.modal);
        // modalID.innerText = id
        //console.log("Se ha clickeado el id " + id);
    });
});

