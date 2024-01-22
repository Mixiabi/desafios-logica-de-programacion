/*Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code. */
/*
2.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

/*
3.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
*/

function buttonConsole(){
    console.log('El botón fue clicado');
}

/*
4.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
*/

function nombreCiudad(ciudad){
    
    let ciudad = prompt('Escriba el nombre de la ciudad:');
    
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

/*
5.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
*/

function loveButton(){
    alert('Yo amo JS');
}

/*
6.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/

function sumaNumeros(valor1,valor2){
    valor1 = parseInt(prompt('Ingrese el primer valor a sumar: '));
    
    valor2 = parseInt(prompt('Ingrese el segundo valor a sumar: '));

    let suma = valor1 + valor2;

    let resultado = alert(`La suma de ${valor1} + ${valor2} es ${suma}`);

}
sumaNumeros();