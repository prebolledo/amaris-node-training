
let myVar = 'X'
const sum = function(numbers){
    let myVar = 'Z'
    console.log(myVar)
    return numbers.reduce(function(suma,num){
        return suma+num
    },0)
}

const arr = function(numbers){
    console.log(myVar)
    this.x = '1'
    console.log(this.x) 
    return numbers.reduce(function(a,num){
        a.push({number:num})
        return a
    },[])
}

const suma = (callback,...numbers) => {
    callback()
    return numbers.reduce((suma,num) => suma+num,0)
}




let name = 'Pablo'

console.log(sum([2,8]))
console.log(suma(function() {
    console.log('B')
},2,8,2))

console.log(arr([2,8]))
console.log(name.toLowerCase())