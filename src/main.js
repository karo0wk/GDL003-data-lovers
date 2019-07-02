//document.getElementById('championsLOL').style.display = 'none';

let traerDatos = () =>  {
	//document.getElementById('championsLOL').style.display = "block";
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'https://raw.githubusercontent.com/LibertaAlonso/GDL003-data-lovers/master/src/data/lol/lol.json', true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {

			let myObject = JSON.parse(this.responseText);
			let answerLOL = document.querySelector('#answerLOL');			
			
			Object.keys(myObject.data).forEach(function (key) {
				answerLOL.innerHTML += `
				<div class='lol'>
				<img src="${myObject.data[key].img}">
				<p><h1>${myObject.data[key].name}</h1></p>
				<p><h2>${myObject.data[key].title}</h2></p>
				<p>Ataque: ${myObject.data[key].info.attack}</p>
				<p>Defensa: ${myObject.data[key].info.defense}</p>
				<p>Magia ${myObject.data[key].info.magic}</p>
				<p>Dificultad: ${myObject.data[key].info.difficulty}</p>
				</div>`;
			});
		}
	}
}
document.querySelector('#buttonJSON').addEventListener('click', traerDatos);
//document.getElementById('championsLOL').style.display = "none";


/*Start-Menu*/

let changeClass = () =>{
	let siteNav = document.getElementById('site-nav');
	siteNav.classList.toggle('site-nav-open');
	let menuOpen = document.getElementById('menu-toggle');
	menuOpen.classList.toggle('menu-open');

}
/*Finish-Menu*/

/*Start-Function-Search*/
let search = () => {
            let tableLol = document.getElementById('tableLOL');
            let search = document.getElementById('textSeach').value.toLowerCase();
            let cellsOfRow='';
            let found=false;
            let compareWith='';
            for (let i = 1; i < tableLol.rows.length; i++) {
                cellsOfRow = tableLol.rows[i].getElementsByTagName('td');
                found = false;
                for (let j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (search.length == 0 || (compareWith.indexOf(search) > -1))
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
/*Finish-Function-Search*/


/*Start-JSON.parse */




/*
function traerDatos()  {
	//console.log('dentro de la función');
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'https://raw.githubusercontent.com/LibertaAlonso/GDL003-data-lovers/master/src/data/lol/lol.json', true);
	//xmlhttp.open('GET', './data/lol/lol.json', true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);

			let myObject = JSON.parse(this.responseText);
			//console.log(myObject);
			let tableLOL = document.querySelector('#tableLOL');
			//respuesta.innerHTML='';

			//console.log("Json parsed data is: " + JSON.stringify(myObject));

			Object.keys(myObject.data).forEach(function (key) {

				tableLOL.innerHTML += `
				<tr>
				<td><img src="${myObject.data[key].img}"</td>
				<td>${myObject.data[key].name}</td>
				<td>${myObject.data[key].title}</td>
				<td>${myObject.data[key].info.attack}</td>
				<td>${myObject.data[key].info.defense}</td>
				<td>${myObject.data[key].info.magic}</td>
				<td>${myObject.data[key].info.difficulty}</td>
				</tr>`;
			});
		}
	}
}

*/


/*Función filterData*/

/*Función sortData*/

/*Función computeStats*/
