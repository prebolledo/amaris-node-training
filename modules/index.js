import  utils, { id, test} from './utils'
import  comprar from './comprar'

test()
utils.sumar(1,5)
console.log(id)

console.log('Compra')

comprar.add(1,2)
comprar.add(4,1)
comprar.add(3,4)

console.log(comprar.getArticulos())
