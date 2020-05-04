function controle() {
    var myVar = document.getElementById("numberOne").Value; //document.getElementById : va chercher l'info du chiffre dans le document .html et .value : indique que c'est une valeur
    var myVar2 = dcoument.getElementById("numberTwo").value;
    
    var myResult = (myVar % myVar2);

    alert (myResult);
}

