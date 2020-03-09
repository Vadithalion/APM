 A Palos con los Malos (Página en construcción)
 
 A continuación unos ejemplos de codigo de algunas partes del sitio web

# Cabecera HTML

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A P M</title>
    <link rel="icon" href="../resources/favicon.png">
    <link rel="stylesheet" href="../styles/style.css">
</head>
```
***

![Image](https://github.com/Vadithalion/APM/blob/master/resources/Captura1.PNG)



# Botones inferiores

```
<div class="bot">
            <a href="#" class="button">1º</a>
            <a href="calc.html" class="button">¿Cuál eres?</a>
            <a href="maps.html" class="button">Encuentranos</a>
            <a href="contact.html" class="button">Contacto</a>
        </div>
```

# Aprende con el Capi!

```
function generar(){
	let j = document.getElementById("numtab").value;

document.getElementById('tablas').innerHTML = ("<ul>");
	
		for(i = 1;i<=10;i++){
				document.getElementById('tablas').innerHTML += ("<li>");
				document.getElementById('tablas').innerHTML += (j + "x " + i + "= " + j * i);
				document.getElementById('tablas').innerHTML += ("</li>");
			};
	
		document.getElementById('tablas').innerHTML += ("</ul>");
		document.getElementById('numtab').hidden += true;
		document.getElementById('botonMult').hidden = true;
```

![Image](https://github.com/Vadithalion/APM/blob/master/resources/Captura2.PNG)


# Función para que te asigne tu vengador

```
function chargen() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resulcalc").innerHTML = x;
  }

  switch(resulcalc){
    case 1:
    resulcalc = 1;
		  document.write("<p>kk</p>");
		  break;
  }
  etc
```


![Image](https://github.com/Vadithalion/APM/blob/master/resources/Captura3.PNG)
