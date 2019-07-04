
/*let traerDatos = () =>  {
let LOL;

	fetch("https://raw.githubusercontent.com/LibertadAlonso/GDL003-data-lovers/master/src/data/lol/lol.json")
	    .then(function(resp){
	        return resp.json();
	    })
	    .then(function(data){
	      LOL = data;
				console.log(LOL);
				showData(LOL)
				
	    });
    
};*/

/*Start-JSON*/
let traerDatos = () =>  {
	
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
	};
};
document.querySelector('#buttonJSON').addEventListener('click', traerDatos);
/*Finish-JSON*/




<<<<<<< HEAD
/*Función filterData*/
=======

			let myObject = JSON.parse(this.responseText);
			//console.log(myObject);
			let tableLOL = document.querySelector('#tableLOL');
			//respuesta.innerHTML='';
>>>>>>> e34a25623b04dccfb5ac810bb3b47f8e7fa79149

//

/*Función sortData*/
let sortLOL = () => {
	let filterLOL;
	filterLOL = window.example.sortData(myObject.data, 'id', 'Ascendente');
	answerLOL.innerHTML = '';
	filterLOL.forEach(function (key) {
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
};
//document.getElementById("buttonJSON").addEventListener("click", sortLOL);


/*Función computeStats*/


<<<<<<< HEAD
/*Start-Menu*/
=======
/*Función filterData*/
const filter = (data, tank) => {
let searchData='';

for(let i=0;i<LOL.length;i++){
    let asesinos=LOL[i].tags.Assasin;
    console.log(LOL[i].tags.Assasin);
    searchData+=asesinos+`<br>`;
  }
return searchData;
}


>>>>>>> e34a25623b04dccfb5ac810bb3b47f8e7fa79149

let changeClass = () => {
	let siteNav = document.getElementById('site-nav');
	siteNav.classList.toggle('site-nav-open');
	let menuOpen = document.getElementById('menu-toggle');
	menuOpen.classList.toggle('menu-open');

};
/*Finish-Menu*/
