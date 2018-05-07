function carga(){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			cargarXML(this);
		}
	};

	xhr.open("GET", "../xml.xml", true);
	xhr.send();

	}

	function cargarXML(){
		var tabla = "<tr><th>Nombre</th><th>Posicion</th><th>Edad</th><th>Goles</th><th>Nacionalidad</th><th>Descripcion</th></tr>"
		var docXML =  xml.responseXML;
		var jugadores = docXML.getElementsByTagName('jugador');

		for (var i=0; i<jugadores.lenght; i++){
			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('nombre')[0].textContent;
			tabla += "</td></tr>"

			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('posicion')[0].textContent;
			tabla += "</td></tr>"

			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('edad')[0].textContent;
			tabla += "</td></tr>"

			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('goles')[0].textContent;
			tabla += "</td></tr>"

			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('nacionalidad')[0].textContent;
			tabla += "</td></tr>"

			tabla += "<tr><td>";
			tabla += jugadores[i].getElementsByTagName('descripcion')[0].textContent;
			tabla += "</td></tr>"

		}
		document.getElementById("jugadores").innerHTML = tabla;
	}
