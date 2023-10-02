let numero = parseInt(prompt("Introduce un numero"));
let multiplo3 = numero % 3;
let multiplo5 = numero % 5;

if(numero % 2 == 0)
{   
    
    if( multiplo3 == 0 )
    {
        if(multiplo5 == 0)
        {
            alert("El numero " + numero +" es par, múltiplo de 3, es múltiplo de 5");
        }
        else
        {
            alert("El numero " + numero +" es par, múltiplo de 3");
        }
    }
    else
    {
        alert("El numero " + numero + "es par");
    }
    
}
else 
{
    if( multiplo3 == 0 )
    {
        if(multiplo5 == 0)
        {
            alert("El numero " + numero +" es impar, múltiplo de 3, es múltiplo de 5");
        }
        else
        {
            alert("El numero " + numero +" es impar, múltiplo de 3");
        }
    }
    else
    {
        alert("El número " + numero + "es impar");
    }    
}
    
    
