
  let inputProvince = document.getElementById("provincePrint");
  let inputLocality = document.getElementById("addressPrint");
  

  if (localStorage.address == "true") {
    inputProvince.innerHTML = localStorage.province + ","
    inputLocality.innerHTML = "calle " + localStorage.street + " " + localStorage.street_number + ", " + localStorage.locality + "."
  }


