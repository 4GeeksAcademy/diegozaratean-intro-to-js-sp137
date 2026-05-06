console.log('hola desde main')



console.log('Quemado')
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for(inicialiación;condición;actualización)
// i = 0 ====> 0. 1
// i = 1 ====> 1. 2 
// i = 2 ====> 2.  3
// i = 3 ====> 3. 4
// i = 4 ====> 4. 5
// i = 5 ====> 

console.log('Dinamico')
for(i=1;i <= 5; i= i + 1){
    console.log(i)

}


// imprimir de 20 a 15
//20
//19
//18
//17
//16
//15
//14
for (let i = 20; i >= 15; i--) {
    console.log(i)
}


// i = 30 ===> 30
// i = 35 ===> 35
// i = 40 ===> 40
// i = 45 ===> 45
// i = 50 ===> 50
// i = 55 ===> 

for(i=30;i <=50;i+=5)
{
 console.log(i)
}

// i = i + 1 ===> i++.  i + + 
// i = i + 5 ===> i+=5  i+= 5

let nombres = ['jhon snow','harvey specter','mr bean']

console.log(nombres)
nombres.push('patrick jane')
console.log(nombres)

const alumnos = ['Pascual','Marianela','Julio']

console.log(alumnos)
alumnos.push('Sergi')
console.log(alumnos)
// alumnos = ['Pascual','Marianela','Julio','Sergi']




// lenght           1          2         3
const frutas = ['manazana','banana','mandarina']
// position         0           1       2

console.log(frutas)
//frutas imprmie lo que tienes en la psicion 1
//   
console.log(frutas[ 1 ])

frutas.push('pasta')
console.log(frutas)
frutas.unshift('pizza')
console.log(frutas)
console.log(frutas.pop())
console.log(frutas)
frutas.shift()
console.log(frutas)
frutas.splice(1,0,'milanesa')
console.log(frutas)
frutas.push('hamburguesa')

console.log('Quemado')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')
console.log("mi comida favorita son "+frutas[3] + 's  y no me gustan las' + frutas[0])

console.log("mi comida favorita son ${frutas[3]}s y no me gustan las ${frutas[0]}s "  )

// i =0 =====> Array(4) [ "manazana", "milanesa", "banana", "mandarina" ] ====> manazanas

console.log('Dinamico')
for(let i = 0; i < frutas.length;i++){
    console.log(frutas[i] + 's')
}