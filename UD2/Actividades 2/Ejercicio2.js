let datos = prompt("Introduce tu localidad");
let edad = parseInt(prompt("Introduce tu edad"));

if(datos == "Alicante" && edad >= 18 && edad <=35)
{
    alert("el usuario puede acceder al carnet de empresarios emprendedores");
}
else
{
    alert ("no puede acceder al carnet de empresarios emprendedores"); 
}