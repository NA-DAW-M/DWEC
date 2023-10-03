let nombre = prompt("Introduce el nombre");
let apellidos = prompt("Introduce los apellidos");
let salario = parseFloat(prompt("Introduce el salario"));
let edad = parseInt(prompt("Introduce la edad"))
let res = 0;


if (salario > 1000 && salario < 2000) 
{
    if (edad > 45) {
        res = salario * 0.03;
        salario = salario + res;
    }
    else if (edad <= 45) {
        res = salario * 0.10;
        salario = salario + res;
    }
}
else {
    if (edad < 30) {
        salario = 1100
    }
    else if (edad > 30 && edad < 45) {
        res = salario * 0.03;
        salario = salario + res;
    }
    else {
        res = salario * 0.15;
        salario = salario + res;
    }
}
alert("Nombre: " + nombre + '\n' + "Apellidos: " + apellidos + '\n' + "Salario: " + salario + '\n' + "Edad: " + edad)