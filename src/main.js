//  Mostrar los datos inicio

const showData = (data) => {
    //let pintar= traerDatos();
    let champions = data.data;
		let atrox = data.data.Aatrox;
    //console.log(atrox);

    let answerLOL = document.querySelector('#answerLOL');

    Object.keys(champions).forEach(function (key) {
      answerLOL.innerHTML += `
      <div class='lol'>
      <img src="${champions[key].img}">
      <p><h1>${champions[key].name}</h1></p>
      <p><h2>${champions[key].title}</h2></p>
      <p>Ataque: ${champions[key].info.attack}</p>
      <p>Defensa: ${champions[key].info.defense}</p>
      <p>Magia ${champions[key].info.magic}</p>
      <p>Dificultad: ${champions[key].info.difficulty}</p>
      </div>`;
    });
}
//mostrar los datos fin//


/*Start-JSON*/
let bringData = () =>  {

// promesas y asincronía
    fetch("https://raw.githubusercontent.com/LibertadAlonso/GDL003-data-lovers/master/src/data/lol/lol.json")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
          showData(data)
          console.log(bringData);
})


}
            document.getElementById("buttonJSON").addEventListener('click', bringData);


/*Finish-JSON*/



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


/*Función filterData*/



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
		<p>Ataque: ${myObject.data[key].info.attack}</p>bll{}
		<p>Defensa: ${myObject.data[key].info.defense}</p>
		<p>Magia ${myObject.data[key].info.magic}</p>
		<p>Dificultad: ${myObject.data[key].info.difficulty}</p>
		</div>`;
	});
};
//document.getElementById("buttonJSON").addEventListener("click", sortLOL);


/*Función computeStats*/

/*función para traer datos con fetch*/

// poner la pagina del servidor



/*Start-Menu*/
let changeClass = () => {
	let siteNav = document.getElementById('site-nav');
	siteNav.classList.toggle('site-nav-open');
	let menuOpen = document.getElementById('menu-toggle');
	menuOpen.classList.toggle('menu-open');

const myObject = JSON.parse(this.responseText);
let ordenar = myObject.sort(function(a,b){
	return ((a.id < b.id)?1:((a.id > b.id)?-1:0));
});

console.log(myObject);
}
