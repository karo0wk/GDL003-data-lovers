/*Menú*/
function changeClass(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');

}

/*Json*/


document.querySelector('#buttonJson').addEventListener('click',traerDatos);
function traerDatos(){
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://raw.githubusercontent.com/LibertaAlonso/GDL003-data-lovers/master/src/data/lol/lol.json", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function(){

   if (this.readyState == 4 && this.status == 200) {
     let myObject = JSON.parse(this.responseText);
     let resuesta= document.querySelector('#respuesta');
     /*res.innerHTML='';*/

     console.log("Json parsed data is: " + JSON.stringify(myObject));

     for(let item of myObject){
       respuesta.innerHTML+=`
       <tr>
       <td>${item.version}</td>
       <td>${item.id}</td>
       <td>${item.key}</td>
       <td>${item.name}</td>
       <td>${item.title}</td>
       <td>${item.img}</td>
       <td>${item.version}</td>
       <td>${item.blurb}</td>
       <td>${item.version}</td>
       <td>${item.attack}</td>
       <td>${item.defense}</td>
       <td>${item.blurb}</td>
       <td>${item.magic}</td>
       <td>${item.difficulty}</td>
       </tr>`


     }
   }
 }
}
