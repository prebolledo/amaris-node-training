const test = () => {
    console.log('test')
}
const id = 1

const sumar = (a, b) => {
    console.log( a+b )
}

export { id , test}

export default {
    sumar,
}
/*
export default (a, b) => {
    console.log( a+b )
}
*/