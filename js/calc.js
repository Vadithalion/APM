function chargen() {
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resulcalc").innerHTML = x;



  switch(x){
    case 1:
    x = 1;
		  document.getElementById('resulcalc').innerHTML = '<img src="../resources/uno_ironman.jpg" alt="ironman">'
      break;
    
    case 2:
    x = 2;
        document.getElementById('resulcalc').innerHTML = '<img src="../resources/dos_capi.jpg" alt="capi">'
        break;

    case 3:
    x = 3;
        document.getElementById('resulcalc').innerHTML = '<img src="../resources/tres_thor.jpg" alt="thor">'
        break;

        case 4:
    x = 4;
        document.getElementById('resulcalc').innerHTML = '<img src="../resources/cuatro_widow.jpg" alt="widow">'
        break;

        case 5:
    x = 5;
        document.getElementById('resulcalc').innerHTML = '<img src="../resources/cinco_hawk.jpg" alt="haweye">'
        break;

        case 6:
    x = 6;
        document.getElementById('resulcalc').innerHTML = '<img src="../resources/seis_hulk.jpg" alt="hulk">'
        break;
  }

  console.log(x);
}