console.log('hola desde main')



// let alumno = 'Benjamin'
// console.log('Antes de la funcion' + alumno)
// function saludarAlumno(alumno){
//     console.log('Dentro de la funcion' + alumno)
//     console.log('hola '+alumno)
// }
// console.log('Despues de la funcion' + alumno)

// saludarAlumno('Jack')



// function transportar(origen,destino){
//     console.log('saliendo de' , origen)
//     console.log('transportandome')
//     console.log('llegando a ' + destino)
// }

// transportar('casa','gimnasio')
// transportar('gimnasio','ofi')
// transportar('ofi','casa')


// function sumar(num1,num2){
//     return num1 + num2    
// }

// console.log(sumar(2,2))

// function autorizarEntrada(edad){
//     if(edad > 18){
//         return 'Puedes entrar'
//     }
//     console.log('me imprimo')
//     return 'No entras te queda afuera'
    
// }

// console.log(autorizarEntrada(15))




function calculoImpuesto(ingreso){
    console.log('Debes pagar '+ ingreso*0.2)
    return ingreso * 0.2
}

let result = calculoImpuesto(10000)

document.getElementById('resultado').innerHTML = result


// function sumar(num1,num2){
//     return num1 + num2
// }

// console.log(sumar(2,2))
// console.log(sumar(1,8))
// console.log(sumar(0,3))
// console.log(sumar(8,2))



// console.log('Antes de Window on load')
// window.onload = function(){
//     console.log('DENTRO de Window on load')
// }
// console.log('Despues de Window on load')


// Funcion declarativa
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('saludoDeclarativo')
}

// Función de expresión
const saludoExpresión = function(){
    console.log('saludoExpresión')
}
saludoExpresión()

// Función Flecha Arrow
const saludoArrow = ()=>{
    console.log('saludoArrow')
}
saludoArrow()

///// Refactoring ////

// PSEDUDO CODIGO
// Desarrollar un generador de excusas de Quien, Cuando , que , Accion
// 1. modificar html desde js
// 2. tomar array who y obtner un elemento aleatorio
// 3. tomar array what y obtner un elemento aleatorio
// 4. tomar array when y obtner un elemento aleatorio
// 5. tomar array action y obtner un elemento aleatorio
// 6. unir los vlaores alaetorios en una excusa