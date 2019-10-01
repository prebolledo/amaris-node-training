//Operadores Logicos

//< | <= | >= | > | == | === | >== | <== | && , ||
// != | !== | !

if(!('1' === 1 || 2 > 1)){
    console.log('OK')
}else{
    console.log('NO')
}

// Operadores Aritmeticos

// + | - | * | / | % | ^ | ++ | --
let resp = 6 % 4
console.log(resp++)
console.log(resp)
console.log(--resp)

//Operador Ternario
let resp2 = true ? 'SI' : 'ERROR'
console.log(resp2)


//Operador || en asignacion de valores
let b // null or undefined
let x = b || 2
console.log(x)


//Operador Spread

let arrx = [6,7]
let [...nums] = [1,2,3]
let nums2 = [...nums,...arrx]

console.log(nums)
console.log(nums2)