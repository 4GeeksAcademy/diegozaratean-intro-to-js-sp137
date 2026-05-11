console.log('hola desde main')

// Mario
// Luigi
// Bowser
// Toad
// Peach

let personajes = ['Mario','Luigi','Bowser','Toad','Peach','star']

console.log(personajes)

console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
console.log(personajes[3])
console.log(personajes[4])

// --i ====> i--
for(i = personajes.length -1 ; i >= 0; i--){
    console.log(i)
    console.log(personajes[i])
}

console.log(personajes)

// console.log(personajes.reverse())
// console.log(personajes)















let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(numbers[0])
console.log(numbers[3])
console.log(numbers[6])
/// i = i + 3 =====> i+=3
/// i = i + 1 =====> i++
for(i=0; i <= 19 ;i+=3){
    console.log(numbers[i])
}



let personajesBuenos = []
for(i=0;i< personajes.length; i++){
    if(personajes[i] != 'Bowser'){
        personajesBuenos.push(personajes[i])
    }
}



console.log(personajes)
console.log(personajesBuenos)
console.log(personajes.filter( (personaje)=> personaje != 'Bowser' ))
console.log(personajes)




let favNumbers = []

for(i=0;i<numbers.length; i++){
    if( i < 14 ){
        favNumbers.push(numbers[i])
    }

}

console.log(numbers)
console.log(favNumbers)
// let newNumbers = numbers.filter( (number)=> number <=14)
console.log(numbers.filter( (number)=> number <=14))
console.log(numbers.filter( (number)=> number != 7))
console.log(numbers.filter( (number)=> number > 7))
console.log(numbers.filter( (number)=> number > 7 && number <=14))

console.log(numbers.filter( (number)=> number%3 == 0))

let newNumbers = []
for(i=0; i < numbers.length; i++){
    newNumbers.push(numbers[i]  * 4)
    
}

console.log(numbers)
console.log(newNumbers)

// let mapNumbers = 
console.log( numbers.map( (numero)=> numero * 4 )  )

console.log( personajes.map( (personaje)=> personaje + 's' ))

personajes.forEach( (character)=>{
    console.log(character + 's')
})

for(i=0;i < personajes.length; i++){
    console.log(personajes[i] + 's')
}

console.log('DO while')

let j = 20
do{
    console.log(j)
    j++
} while(j < 10)

console.log('For')
for(i=20;i < 10; i++){
    console.log(i)
}