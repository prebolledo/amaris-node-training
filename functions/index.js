const sum = function(numbers){
    return numbers.reduce(function(suma,num){
        return suma+num
    },0)
}

const arr = function(numbers){
    return numbers.reduce(function(a,num){
        a.push({number:num})
        return a
    },[])
}

const suma = (callback,...numbers) => {
    callback()
    return numbers.reduce((suma,num) => suma+num,0)
}

let myVar = 1
const func = function(){
    console.log('This var is global myVar = '+myVar)
    const funcI = function(){ 
        let myVar = 2
        console.log('This var is local myVar = '+myVar)
    }
    funcI()
}

func()

console.log(sum([2,8]))
console.log(suma(function() {
    console.log('B')
},2,8,2))

console.log(arr([2,8]))


let name = 'Pablo'
console.log(name.toLowerCase())


//En prototipos no sirve la asignación de funciones arrow
//Dado que las funciones arrow abren el scoupe de this
Array.prototype.ordenar = function() {
    let aux
    for(let j=0; j< this.length; j++){
        for(let k=j+1; k< this.length; k++){
            if(this[j] > this[k]){
                aux = this[j]
                this[j] = this[k]
                this[k] = aux
            }
        }
    }    
    return this
}

console.log([4,5,1,2].ordenar())

console.log(
    [1,2,3].sort((a,b) => {
        return a < b ? 0 : -1
    })
)

const ordenar = (arr) =>{
    let aux
    for(let j=0; j< arr.length; j++){
        for(let k=j+1; k< arr.length; k++){
            if(arr[j] > arr[k]){
                aux = arr[j]
                arr[j] = arr[k]
                arr[k] = aux
            }
        }
    }
    return arr
} 

console.log(ordenar([1,6,8,2]))