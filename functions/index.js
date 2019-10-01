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