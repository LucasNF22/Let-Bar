window.onload = function () {


    let inputProvince = document.getElementById("provincePrint");
    let inputLocality = document.getElementById("addressPrint");
    
    
  console.log(inputProvince);
  console.log(inputLocality);

   console.log(localStorage);    
   
   if(localStorage.address == "true"){
    inputProvince.innerHTML = localStorage.province + ","
    inputLocality.innerHTML = "calle " +localStorage.street + " " + localStorage.street_number + ", " + localStorage.locality + "."
   }


}