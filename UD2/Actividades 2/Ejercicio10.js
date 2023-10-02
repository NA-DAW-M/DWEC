let adivinar = parseInt(prompt("Introduce un número"));
let numero; 

while( numero != adivinar)
{
    numero = parseInt(prompt("Intenta adivinar el numero"));
    if(adivinar > numero)
    {
        alert("El numero es más mayor");
    }
    else if(adivinar < numero)
    {
        alert("El numero es más pequeño")
    }
}

alert("Enhorabuena has introducido el número correcto es: " + adivinar);

	



