window.onload = function () {


  let inputProvince = document.getElementById("provincePrint");
  let inputLocality = document.getElementById("addressPrint");
  
  let modalID = document.getElementById("modalID")
  
  console.log(window)

  document.querySelectorAll("label.click-para-modal").forEach(el => {
    el.addEventListener("click", e => {
      const id = e.target.getAttribute("id");                               
      
     // localStorage.removeItem('modal');
     // localStorage.setItem('modal', id);
     // console.log("modal" + localStorage.modal);
     // modalID.innerText = id
      //console.log("Se ha clickeado el id " + id);
    });
  });



  if (localStorage.address == "true") {
    inputProvince.innerHTML = localStorage.province + ","
    inputLocality.innerHTML = "calle " + localStorage.street + " " + localStorage.street_number + ", " + localStorage.locality + "."
  }


}