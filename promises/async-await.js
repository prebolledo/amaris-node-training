(async ()=>{
    const promise = new Promise((resolve, reject) => {
        console.log('...')
        let i = 1
        let clearI = setInterval(()=>{
            console.log('ups')
            ++i
            if(i>3){
                clearInterval(clearI)
                resolve('OK')
            }
        },2000)    
        //reject('ERROR')
    })

    console.log('Go!')
    await promise.then(
        //Todo Bien
        (result) => { 
            console.log(result)
        },
        //Todo mal 
        (error) => { 
            console.log(error)
        },       
    )

    console.log('Fin')
})()

console.log('OUT function')