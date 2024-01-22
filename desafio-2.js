/*
1.Crear una función que muestre "¡Hola, mundo!" en la consola.
*/

function saludo() {
    console.log('¡Hola, mundo!');
}
saludo();

/*
2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/

function saludoUsuario() {
    let nombre = prompt('Cual es tu nombre?: ')
    return console.log(`¡Hola ${nombre}!`);
}
saludoUsuario();

/*
3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/

function dobleNumero(numero) {
    numero = parseInt(prompt('ingresa un numero:'));
    let doble = numero * 2;
    return console.log(`el doble de ${numero} es igual a ${doble}`);
}
dobleNumero();

/*
4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/

function numPromedio(num1,num2,num3) {
    let promedio = parseInt((num1+num2+num3))/3;
    return console.log(`el promedio final es: ${promedio}`);
}
numPromedio(15,8,5);

/*
5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/

function maximoValor(valor1,valor2) {
    
    if (valor1 > valor2) {
        return valor1;
    }else{
        return valor2;
    }   

//     // return  valor1 > valor2 ? valor1 : valor2;
}
let mxnumero = maximoValor(0.546,5.666);
console.log(mxnumero);

/*
6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

function multiplicarPorMismo(value1) {
    let mSiMismo = value1 * value1;
    return console.log(mSiMismo);

    // return value1 * value1;
}

multiplicarPorMismo(584);
