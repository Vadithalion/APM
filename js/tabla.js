
function generar(){
	// Selecting the input element and get its value 
	let j = document.getElementById("numtab").value;
	//console.log("AQUI AL PRINCIPIO",j);



document.getElementById('tablas').innerHTML = ("<ul>");
	
		for(i = 1;i<=10;i++){
				document.getElementById('tablas').innerHTML += ("<li>");
				document.getElementById('tablas').innerHTML += (j + "x " + i + "= " + j * i);
				document.getElementById('tablas').innerHTML += ("</li>");
			};
	
		document.getElementById('tablas').innerHTML += ("</ul>");
		document.getElementById('numtab').hidden += true;
		document.getElementById('botonMult').hidden = true;
		//document.getElementById('botonMult').style.display = "none";
		
}

