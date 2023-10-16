/* Ejercicio 1 */

var pila = prompt("Dame palabras")
var tabla = pila.split(",")

var numero = parseInt(prompt("Escribe el número"))


pilaNueva = []

function obtenerElementos() {
    for( i = 0 ; i < numero ; i ++){
        pilaNueva.push(tabla[i])
    }
    
    console.log(pilaNueva)
}

obtenerElementos()

/* Ejercicio 2 */
var pila = [3,2,1,3,2,3,5,3]

var numeroARemplazar = 3
var numeroReemplazado = 5

function reemplazar() {
    for( i = 0 ; i < pila.length ; i++ ){
        if( pila[i] === numeroARemplazar){
            pila[i] = numeroReemplazado
            break
        }
        
    }
    for (i = 0 ; i < numeroARemplazar ; i++ ){
        pila.pop()
    }
    console.log(pila)
}

reemplazar()

/* Ejercicio 3 */

var camino = ["origen", "pueblo 1", "pueblo 2", "destino"]


function cambiarOrigen(){
    var caminoDeVuelta = [...camino].reverse()
    console.log(camino)
    console.log(caminoDeVuelta)
}

cambiarOrigen()


if (this.id === garage[i]) {
    garage.splice( i , 1);
    break;
} else {
    garage.splice( i , 1);
    garageTemporal.push(garage[i]);
}

/* Ejercicio 4 */
let garage = [];

class Almacen {
    constructor(id) {
        this.id = id;
    }

    retirarContenedor() {
        let garageTemporal = [];
        for (let i = 0; i < garage.length; i++) {
            if( garage[i] === this.id ){
                garage.splice( i , 1 )
                break
            } else { 
                garageTemporal.push( garage[i] )
                garage.splice ( i , 1)
                i--
                
            }
        }
            if( garageTemporal.length !== 0 ){
            alert("Se quitaron los contenedores: " + garageTemporal);
            } else {
                alert("No se quitó ningún contenedor")
            }
            alert("Se ha retirado el contenedor de ID: " + this.id);
            alert("Ahora el garage tiene los contenedores: " + garage)
        let garageFinal = garageTemporal.concat(garage) 
        garage = garageFinal
            alert("Volviendo a insertar los contenedores..." );
            alert("El garage tiene los contenedores: " + garage)

    }

    apilarContenedor() {
        garage.push(this.id);
    }
}

var contenedor1 = new Almacen(100);
var contenedor2 = new Almacen(200);
var contenedor3 = new Almacen(300);
var contenedor4 = new Almacen(400);
var contenedor5 = new Almacen(500);
var contenedor6 = new Almacen(600);
var contenedor7 = new Almacen(700);
var contenedor8 = new Almacen(800);
var contenedor9 = new Almacen(900);
var contenedor10 = new Almacen(1000);
var contenedor11 = new Almacen(1100);
var contenedor12 = new Almacen(1200);

contenedor1.apilarContenedor();
contenedor2.apilarContenedor();
contenedor3.apilarContenedor();
contenedor4.apilarContenedor();
contenedor5.apilarContenedor();
contenedor6.apilarContenedor();
contenedor7.apilarContenedor();
contenedor8.apilarContenedor();
contenedor9.apilarContenedor();
contenedor10.apilarContenedor();
contenedor11.apilarContenedor();
contenedor12.apilarContenedor();

console.log(garage)

contenedor6.retirarContenedor();


console.log(garage)






