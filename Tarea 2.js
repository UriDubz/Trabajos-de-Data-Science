/* Ejercicio 1  */

let cola = [ " amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]
let par = []
let impar = []
for ( i = 0 ; i < cola.length ; i++ ) {
    if ( i % 2 === 0 ){
        par.push( cola[i] )
    } else {
        impar.push ( cola[i] )
    }
}

console.log( "Los pares son: " + par)
console.log( "Los impares son: " + impar)

/* Ejercicio 2 */

let colaFinal = []
let colaRetirada = [] 
let Cola = [ 
    { user:"User1", ticket:true },
    { user:"User2", ticket:true },
    { user:"User3", ticket:false },
    { user:"User4", ticket:true },
    { user:"User5", ticket:false },
    { user:"User6", ticket:false },
    { user:"User7", ticket:true },
    { user:"User8", ticket:true },
    { user:"User9", ticket:true },
    { user:"User10", ticket:false },
    { user:"User11", ticket:true },
]

for ( i = 0 ; i < Cola.length ; i++ ){
    if ( Cola[i].ticket === true ){
        colaFinal.push( Cola[i].user )
    } else {
        colaRetirada.push( Cola[i].user )
    }
} 

console.log( "Los que estaban al inicio fueron: " + Cola.map(item => item.user))
console.log( "Los que se retiraron fueron: " + colaRetirada )
console.log( "Los que se quedaron fueron: " + colaFinal )

