/* https://github.com/public-apis/public-apis */

var apiurl= "https://dog.ceo/api/breeds/image/random/3";

var imagen1 = document.getElementById("img1");
var imagen2 = document.getElementById("img2");
var imagen3 = document.getElementById("img3");

function nuevaimg(){
    // obtener imagen 
    fetch(apiurl)  
      .then(response => response.json())
      .then(data => {
         // mostrar imagen
         imagen1.src = data.message[0];
         imagen1.alt = "Imagen1";
         
         imagen2.src = data.message[1];
         imagen2.alt = "Imagen2";
      
         imagen3.src = data.message[2];
         imagen3.alt = "Imagen3";
      
    });
      
 }
nuevaimg();