
class Calc{
    construct(title){
        this.title = title
    }
    sum = (a,b) => a + b
    mult = (...args) => args.reduce((i,n ) => i*n, 1)
}

const calc = new Calc("My Call")
const sum = calc.sum(3,7)
const mult = calc.mult(1,2,3,4,5)
console.log(`sum is ${sum}`)
console.log(`mult is ${mult}`)