let name ='Pablo'
let sueldo = 1000
const documentos = ['Uno','Dos'] 
let html = `
    <html>
        <body>
            <div>
                <h1>Hola</h1>
                <p>${name}</p>
            </div>
            <div>
                sueldo: ${sueldo * 1.15}
            </div>
            <div>
                Documentos
                <ul>
                    ${
                        documentos.map(item => `<li>${item}</li>`).join("")
                    }
                </ul>
            </div>
        </body>
    </html>
`

console.log(html)