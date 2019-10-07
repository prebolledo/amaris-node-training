const productos = [
    {name:'Zapatillas',code:1},
    {name:'Pantalon',code:4},
    {name:'Camisa',code:3},
]

const carrito = []

const add = (code, cantidad) => {
    const list = productos.filter(producto => producto.code == code)

    if(list.length > 0){
        carrito.push({
            producto : list[0], 
            cantidad: cantidad,
        })
    }
}

const getArticulos = () => {
    return carrito
}

export default {
    add,
    getArticulos,
} 

