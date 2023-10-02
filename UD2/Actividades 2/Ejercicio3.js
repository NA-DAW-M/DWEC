let hermanos = parseInt(prompt("Introduce cuantos hermanos tienes"));
let cantidad = parseFloat(prompt("Introduce la cantidad"));
let descuento;
if(hermanos >= 3)
{
    descuento = cantidad * 0.85;
        alert("El precio final es: " + descuento);
}
else if(hermanos <3 && hermanos > 0)
{
    descuento = cantidad * 0.95;
        alert("El precio final es: " + descuento);
}

if(hermanos == 0)
{
    alert("No tiene descuento : " + cantidad);
}