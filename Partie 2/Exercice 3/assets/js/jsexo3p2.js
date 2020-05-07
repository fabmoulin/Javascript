function PopupImage () {
    var currWidth = document.getElementById("myImage").clientWidth; //variable avec pour valeur la taille de base de l'image

    document.getElementById("myImage").style.width = (currWidth+30)+'px'; //quand on cliquera sur l'image elle aura la taille de base + 30px
}