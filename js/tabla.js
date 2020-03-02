function generar(){
	// Selecting the input element and get its value 
	let j = document.getElementById("numtab").value;
	console.log(j);


	document.write("<ul>");
	
		for(i = 1;i<=10;i++){
				document.write("<li>");
				document.write(j + "x " + i + "= " + j * i);
				document.write("</li>");
			};
	
		document.write("</ul>");
		document.write("<a href=tablas.html class=button>Volver a aprender con Capi</a>");
}

/*
document.getElementById('tablas').innerHTML("<ul>");
	
		for(i = 1;i<=10;i++){
				document.getElementById('tablas').innerHTML("<li>");
				document.getElementById('tablas').innerHTML(j + "x " + i + "= " + j * i);
				document.getElementById('tablas').innerHTML("</li>");
			};
	
		document.getElementById('tablas').innerHTML("</ul>");



document.article.innerHTML("<ul>");
	
		for(i = 1;i<=10;i++){
				document.article.innerHTML("<li>");
				document.article.innerHTML(j + "x " + i + "= " + j * i);
				document.article.innerHTML("</li>");
			};
	
		document.article.innerHTML("</ul>");
}

*/