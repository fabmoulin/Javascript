function controle() {
    var myVarSize = parseInt(document.getElementById("size").value); //parseInt = signifie que c'est un nombre
    var myVarBirth = parseInt(document.getElementById("yearBirth").value);
    var num1 = (myVarSize*2)+5
    var num2 = (num1*50)
    var num3 = (num2-myVarBirth)
    var myResult = (num3+1769);
    //ou alors ((((myVarSize *2)+5)*50)-myVarBirth)+1769
    alert (myResult);
}