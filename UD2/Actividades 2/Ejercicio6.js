let numero = parseInt(prompt("Introduce un numero"));
let numero2 = parseInt(prompt("Introduce un numero"));
let operador = prompt("Introduce el operador +,-,* o /");

switch(operador)
{
    case "+":
        alert(numero + numero2)
        break;
    case "-":
        alert(numero - numero2)
        break;
    case "*":
        alert(numero * numero2)
        break;
    case "/":
        alert(numero / numero2)
        break;
    default:
        document.write("No existe el caracter introducido")

}