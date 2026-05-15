console.log('hola desde main')

// PSEUDOCODIGO
// hacer una app que calcule el impuesto si ganas menos de 1000 debes imprimir "debes pagar el 5%"
// si ganas mas de 1000 debes imprimir "debes pagar el 10%", el salario es una variable definido


// DONE: definir el salario
let salario = 5000

// let mensaje = ''
// if(salario >= 1000){    
//     mensaje = "debes pagar el 10%"
// } else{    
//     mensaje = "debes pagar el 5%"
// }

// Que es el Ternary Operator
// if( condicion){
    // que hago si cumple
    //}else{
        //  que hago si no
        //}
        // ( condicion) ? que hago si cumple : que hago si no
let mensaje =   salario >= 1000 ? "debes pagar el 10%" : "debes pagar el 5%"
let encargado = 'goku'        
console.log(mensaje)
document.getElementById('content').insertAdjacentHTML(
    "beforeend",
    `el calculo que realizo ${encargado} es :<p>  ${mensaje} </p>`
)