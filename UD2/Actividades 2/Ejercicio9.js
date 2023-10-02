let i = 1;
let res = 1;
let num = parseInt(prompt("Introduce un número"))
while( i <=num)
{
    res = res * i;
    i++;
}
alert("El factorial del " + num + " es: " + res); 