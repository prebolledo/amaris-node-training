//Sentencia if / else
if(true){
}

if(true){
}else{
}

if(true){
}else if(true){
}else{
}


//Sentencia Switch
let value = 0 

switch (value) {
    case 0:
        console.log('0')
        break;    
    case 1:
    case 2:
        console.log('1 or 2')
        break;
    default:
        console.log('def')
        break;
}

//Ciclo For
for(let i = 0;i<10; i++){
    console.log('i: '+i)
}


//Ciclo for sobre elementos iterables
let persons = [{name:'Pablo'},'Rodrigo','Despues te lo digo']

let person
for(let k in persons){
    person = persons[k]
    console.log(person)
}

let personita = {
    name:'Pablo',
    age:35,
    saludar: () => {
        console.log('hola')
    }
}

for(key in personita){
    if(typeof(personita[key]) == 'function'){
        personita[key]()
    }else{
        console.log(key+' : '+personita[key])
    }
}

//Do
let x = 0
do{
    console.log('x: '+x)
}while(++x < 10)

//While
while(++x < 20){
    console.log('x while : '+x)
}

//Bloque privado de trabajo
{
    let x = '.'
    console.log('x: '+x)
}
console.log(x)


//Funciones anonimas
const sumarUno = function(n){
    return n + 1
}
let numeroMasUno = sumarUno(1)
console.log(numeroMasUno)


//Try Catch Finally

try{
    let div = 0
    if(div == 0){
        throw Error('Division por cero')
    }
    let y = 1/div
}catch(e){
    console.log(e instanceof Error)
    console.log(e)
}finally{
}