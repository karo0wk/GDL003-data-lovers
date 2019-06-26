/*Menú*/
function changeClass(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');

}

/*Json*/
/*var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()

    {
        if (this.readyState == 4 && this.status == 200)
        {
            var dataArray = JSON.parse(this.responseText);
            var i, j;

            var displayData = "";

           for (i in dataArray.LOL)

            {

                for (j in dataArray.LOL[i].description)

                {

                    displayData += "<b>Versión: </b> " + dataArray.LOL[i].version + "<br>";
                    displayData += "<b>ID by: </b> " + dataArray.LOL[i].id + "<br>";
                    displayData += "<b>Latest Release: </b> " + dataArray.LOL[i].key + "<br>";
                    displayData += "<b>Nombre: </b> " + dataArray.LOL[i].name + "<br>";
                    displayData += "<b> Titulo: </b> " + dataArray.LOL[i].title + "<br>";
                    displayData += "<b>Imagen: </b> " + dataArray.LOL[i].img + "<br>";
                    displayData += "<b>Splash: </b> " + dataArray.LOL[i].splash + "<br>";
                    displayData += "<b>ID by: </b> " + dataArray.LOL[i].blurb + "<br>";
                    displayData += "<b>Latest Release: </b> " + dataArray.LOL[i].splash + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.LOL[i].info.attack + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.LOL[i].info.defense + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.LOL[i].info.magic + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.LOL[i].info.difficulty + "<br>";

                    displayData += "<br><hr>";

                }

            }

        }

        document.getElementById("displayData").innerHTML = displayData;
        };
        xmlhttp.open("GET", "./data/lol/lol.jsons", true);
        xmlhttp.send();*/

document.querySelector('#buttonJson').addEventListener('click',traerDatos);
function traerDatos(){
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./data/lol/lol.json", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function(){


   if (this.readyState == 4 && this.status == 200) {
     let myObject = JSON.parse(this.responseText);
     let resuesta= document.querySelector('#respuesta');
     res.innerHTML='';
     /*console.log("Json parsed data is: " + JSON.stringify(myObject));*/

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
