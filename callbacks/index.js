const persons = []
/*
    persons.pop() > elimina un elemento
    persons.length > entrega el largo
    persons.reverse() > reversa una lista
    > map
    > filter
    > reduce
    > etc.
*/


//Poner un elemento
persons.push({
    name: 'Pablo',
    salary: 1000,
})

persons.push({
    name: 'Wendy',
    salary: 10000,
})

persons.push({
    name: 'Cristian',
    salary: 5000,
})

// Forma tradicional
//Filtrar

let filtrados = []

for(let i=0; i<persons.length; i++){
    if(persons[i].salary >= 5000){
        filtrados.push(persons[i])
    }
}

console.log('Tradicional')
console.log('hay '+filtrados.length+' personas con salario mayor o igual a 5000 ')
console.log(filtrados)

//Formato funcional
filtrados = persons.filter(person => person.salary < 5000 && person.name == 'Pablo')
filtrados = persons.filter((person,i) => {
    console.log(i)
    return person.salary < 5000 && person.name == 'Pablo'
})

console.log('Funcional')
console.log('hay '+filtrados.length+' personas con salario mayor o igual a 5000 ')
console.log(filtrados)

const myFilter = (persons, calbackCondicionFiltro, callbackLog) => {
    return persons.filter((person,i) => {
        callbackLog('Filtrando persona '+person.name, person)
        return calbackCondicionFiltro(person)
    })
}

filtrados = myFilter(persons,
    (person) => {
        return person.salary >=10000
    },
    (message, person) => {
        console.log('[LOG]['+(new Date())+'] '+message)
    }
)

console.log(filtrados)
let i = 1
let clearI = setInterval(()=>{
    console.log('ups')
    ++i
    if(i>3){
        clearInterval(clearI)
    }
},100)

console.log('oooo')

