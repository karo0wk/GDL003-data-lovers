/*Menú*/
function changeClass(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');

}

/*  JSON */

document.querySelector('#buttonJson').addEventListener('click',traerDatos);
function traerDatos(){
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://raw.githubusercontent.com/LibertaAlonso/GDL003-data-lovers/master/src/data/lol/lol.json", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function(){

   if (this.readyState == 4 && this.status == 200) {
     let myObject = JSON.parse(this.responseText);
     let resuesta= document.querySelector('#respuesta');
     //respuesta.innerHTML='';

     //console.log("Json parsed data is: " + JSON.stringify(myObject));


     Object.keys(myObject).forEach(function (key){
         console.log(myObject[key]);
     });

   }
 }
}
