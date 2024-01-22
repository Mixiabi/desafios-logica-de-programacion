/*
1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/

function calcularIMC(altura,peso) {

    var imc=altura/peso;
    return imc
    // return console.log(`tu indice de masa corporal es : ${imc}`)
}
calcularIMC(147,50);



/* 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/

function calculaFactorial(numero) {
   
    if (numero === 0 || numero === 1) {
        return numero=1;
    }else{
        return numero * calculaFactorial(numero-1);
    }
}
let num = calculaFactorial(8);
console.log(num);


/*3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/

function convertirDolares(monedaDolar) {
    var cotizacionPen = 3.74
    var conversionDolar = (monedaDolar * cotizacionPen).toFixed(2);

    return console.log(`$ ${monedaDolar} son S/.${conversionDolar}`);    
}
convertirDolares(40);


/* 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function calcularAreaPerimetro(altura,anchura) {
    
    var area = (anchura*altura)/2;
    var perimetro = (anchura*2)+(altura*2);
    console.log(`Area: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
    return;      
}
calcularAreaPerimetro(20,20);


/* 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function salaAreaPerimetro(radio) {
    // pi*r**2 area
    // 2*pi*r perimetro
    var pi = 3.14
    var area = pi * radio ** 2
    var perimetro = 2 * pi * radio
    console.log(`Area: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}
salaAreaPerimetro(24);


/* 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaDeMultiplicar(numero) {
    var multiplicador = 0;
    while (multiplicador<=12){
              
        console.log(`${numero} x ${multiplicador} = ${(numero * multiplicador)}`) 
        multiplicador+=1;
    }
    return;
}
tablaDeMultiplicar(12);