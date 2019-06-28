/*Menú*/
function changeClass() {
	let siteNav = document.getElementById('site-nav');
	siteNav.classList.toggle('site-nav-open');
	let menuOpen = document.getElementById('menu-toggle');
	menuOpen.classList.toggle('menu-open');

}

/*  JSON */
document.querySelector('#buttonJSON').addEventListener('click', traerDatos);

function traerDatos() {

	//console.log('dentro de la función');
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'https://raw.githubusercontent.com/LibertaAlonso/GDL003-data-lovers/master/src/data/lol/lol.json', true);
	//xmlhttp.open('GET', './data/lol/lol.json', true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			//onsole.log(this.responseText);

			let myObject = JSON.parse(this.responseText);
			//console.log(myObject);
			let respuesta = document.querySelector('#respuesta');
			//respuesta.innerHTML='';

			//console.log("Json parsed data is: " + JSON.stringify(myObject));

			Object.keys(myObject.data).forEach(function (key) {

				//console.log(myObject.data[key].name);

				respuesta.innerHTML += `
        <tr>
        <td><img src="${myObject.data[key].img}"</td>
        <td>${myObject.data[key].name}</td>
        <td>${myObject.data[key].version}</td>
        <td>${myObject.data[key].id}</td>
        <td>${myObject.data[key].key}</td>
        <td>${myObject.data[key].title}</td>
        <td>${myObject.data[key].info.attack}</td>
        <td>${myObject.data[key].info.defense}</td>
        <td>${myObject.data[key].info.magic}</td>
        <td>${myObject.data[key].info.difficulty}</td>
        </tr>`

			});
		}
	}
}

/*Función filterData*/

/*Función sortData*/
function Search() {
            var tableLol = document.getElementById('tableLOL');
            var search = document.getElementById('textSeach').value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
            for (var i = 1; i < tableLol.rows.length; i++) {
                cellsOfRow = tableLol.rows[i].getElementsByTagName('td');
                found = false;
                for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (search.length == 0 || (compareWith.indexOf(search) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tableLol.rows[i].style.display = '';
                } else {
                    tableLol.rows[i].style.display = 'none';
                }
            }
        }

/*Función computeStats*/
