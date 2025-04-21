//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables
var miVariable = "Hola soy una variable con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope declarado
const miVariable3 = "constante no cambian los valores";

const hola = "hola fede"
console.log("hola mundo")
console.log(hola)          //es el equivalente a print

//funciones
function myFunction(variable){  
    //la funcion tiene una declaracion
    //en los parentesis van los parametros
    console.log(variable)
    return //en general la funciones van a retornar algo
}

//funcion flecha
const myArrowFunction = (variable) => variable; 

//ejecucion de una funcion
myFunction("xd")

const variable = true

//condicional con if
if(variable){
    console.log(true);
} else{
    console.log(false);
}

//condicional ternario (sirve solo para dos clausulas)
variable ? console.log(true) : console.log(false);

//arreglos o arrays (son las listas de python)
const arr = [1, true, 'hola como va', 0, 1, 2]

console.log(`esta es la posicion 1 de la lista: ${arr[1]}`);

//objetos
//los objetos son como los diccionarios en python
const objeto = {
    clave: "valor tralalero",
};

//los objetos estan compuestos por clave valor
console.log(objeto.clave)

