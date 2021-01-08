// JavaScript Document
var compteurImage=1;
var totalimage=10;

function slider (X){

    var image=document.getElementById('img');
    compteurImage=compteurImage + X;
    image.src="images/corona"+compteurImage+"jpg"

    if(compteurImage>=totalimage){
        compteurImage=1;
    }
    if(compteurImage<1){
       compteurImage=totalimage; 
    }
}



function slider (X){

    var image=document.getElementById('img');
    compteurImage=compteurImage + X;
    image.src="images/corona"+compteurImage+"jpg"

    if(compteurImage>=totalimage){
        compteurImage=1;
    }
    if(compteurImage<1){
       compteurImage=totalimage; 
}
}

window.setInterval(sliderAuto,3000);

// Calculer la somme:

         function somme(){
             var nbr1, nbr2,nbr3,nbr4, sum;
             nbr1 = Number(document.getElementById("nbr1").value);
             nbr2 = Number(document.getElementById("nbr2").value);
             nbr3 = Number(document.getElementById("nbr3").value);
             nbr4 = Number(document.getElementById("nbr4").value);
             sum = nbr1 + nbr2 + nbr3 +nbr4;
             document.getElementById("sum").value = sum;
         }
