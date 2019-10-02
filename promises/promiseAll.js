const all = async () => {
    const promises = []
    promises.push(
        new Promise((resolve, reject ) => {
            console.log('promise 1')            
            let clearI = setInterval(()=>{
                console.log('fin promise 1')
                clearInterval(clearI)
                resolve([1,2,3])
            },3000)
        })
    )
    
    promises.push(
        new Promise((resolve, reject ) => {
            console.log('promise 2')            
            let clearI = setInterval(()=>{
                console.log('fin promise 2')
                clearInterval(clearI)
                resolve({id:1,name:'Pablo'})
            },5000)             
        })
    )

    promises.push(
        new Promise((resolve, reject ) => {
            console.log('promise 3')            
            let clearI = setInterval(()=>{
                console.log('fin promise 3')
                clearInterval(clearI)
                resolve({idUser:1, active:false})
            },2000)             
        })
    )

    console.log('trabajar con el resultado')

    await Promise.all(promises).then(
        (results) => {
            console.log(results)
        },
        () => {
            console.log('ERROR')   
        }
    )
}

all()