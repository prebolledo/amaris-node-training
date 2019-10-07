//1 USD > 600 CLP
const EXCHANGE_RATE = 600
const employees = [{"id":1,"type":"MANAGER","salary":{"amount":10000,"currency":"USD"},"active":true},{"id":2,"type":"SCRUM MASTER","salary":{"amount":10000,"currency":"USD"},"active":true},{"id":3,"type":"DEVELOPER","salary":{"amount":3340,"currency":"USD"},"active":true},{"id":4,"type":"DEVELOPER","salary":{"amount":1800000,"currency":"CLP"},"active":true},{"id":5,"type":"DEVELOPER","salary":{"amount":3000,"currency":"USD"},"active":false},{"id":6,"type":"DEVELOPER","salary":{"amount":2500000,"currency":"CLP"},"active":true},{"id":7,"type":"MANAGER","salary":{"amount":10000,"currency":"USD"},"active":true},{"id":8,"type":"SCRUM MASTER","salary":{"amount":10000,"currency":"USD"},"active":true},{"id":9,"type":"DEVELOPER","salary":{"amount":3000,"currency":"USD"},"active":false}]

/*
 * Para cada ejercicio propuesto crear una funcion que realiza dicha tarea  
 *
 * 1. Si el empleado es DEVELOPER, aumentar su sueldo en un 15%, siempre y cuando esté activo.
 * 2. A los scrum master reducirle el sueldo en 20%, siempre y cuando esté activo.
 * 3. Obtener el sueldo promedio de cada tipo de empleado, siempre y cuando esté activo. El promedio debe ser en dolares. 
 * 4. Al terminar el proceso de todos los posibles calculos, eliminar de la lista de empleados, a los que no están activos 
 */


const calculateAverages = (employees) =>{
    let salary

    const groups = employees.reduce((groups,employed) => {

        (createeGroupEmployedType = (list,key) =>{
            if(typeof(list[key]) == 'undefined'){
                list[key] = {
                    totalSalary:0,
                    average:0,
                    quantity: 0
                }
            }
        })(groups,employed.type)

        if(employed.active){
            
            salary = (getSalaryDollars = (currency, amount, changeSaleryCallback) => {
                return changeSaleryCallback(
                    currency == 'CLP' ? 
                        amount / EXCHANGE_RATE 
                    : 
                        amount
                )
            })(employed.salary.currency, employed.salary.amount,(salary) => {
                switch(employed.type){
                    case 'DEVELOPER':
                        salary *= 1.15
                        break
                    case 'SCRUM MASTER':
                        salary -= salary * 0.20
                        break
                }
                return salary
            })

            groups[employed.type].totalSalary += salary
            ++groups[employed.type].quantity
        }    
        return groups
    },{})

    let item
    for(let employedType in groups){
        item = groups[employedType]
        item.average = item.totalSalary / item.quantity
    }

    return groups
}

const removeInactiveEmployees = (employees) => {
    return employees.filter(employed => employed.active)
}

const exercise = (employees,averageCallback,finalEmployeesListCallback) => {
    averageCallback(
        calculateAverages(employees)
    )
    finalEmployeesListCallback(
        removeInactiveEmployees(employees)
    )
}

exercise(employees,(averages) => {
    console.log(['Averages',averages])
},(employees) => {
    console.log(['Final Employees List',employees])
})