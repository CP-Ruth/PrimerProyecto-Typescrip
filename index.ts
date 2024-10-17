console.log("Ejercicio 2: corriendo desde typescript");

const texto: string = "Hola, TypeScrip";
const numero : number = 123;
const booleano : boolean = true;
const fecha : Date = new Date(2024,8,8);

const tiposDeDatos = document.getElementById("tipodeDatos");
if(tiposDeDatos){
    tiposDeDatos.innerHTML = `
    <h3>Ejercicio 3</h3>
    <p>Texto: ${texto}</p>
    <p>Numero: ${numero}</p>
    <p>Booleano: ${booleano}</p>
    <p>Fecha: ${fecha.toLocaleDateString()}</p>`
}

//Ejercicio 4
function numerosATexto(numeros: number):string{
    return numeros.toString();
}

const numString = document.getElementById("funcionNumStr");
if(numString){
    numString.innerHTML = `
    <h3>Ejercicio 4</h3>
    <p>Número convertido a cadena: ${numerosATexto(456)}</p>`
}

//Ejercicio 5

const arr: number[] =[1,2,3,4,5,6,7,8,9];
function sumaTotal(numeros:number[]):number {
    return numeros.reduce((acc, num) => acc + num, 0);
}

const sumaDelArray = document.getElementById("sumaArray");
if(sumaDelArray){
    sumaDelArray.innerHTML=`
        <h3>Ejercicio 5</h3>
        <p>Array: [ ${arr} ]</p>
        <p>Suma del array: ${sumaTotal(arr)}</p>
    `
}
//Ejercicio 6

const estudiante = {
    nombre: 'Ruth',
    edad: 20,
    curso: 'Tecnicatura en Programación'
}

const infoEstudiante = document.getElementById("infoEstudiante");
if (infoEstudiante) {
    infoEstudiante.innerHTML=`
    <h3>Ejercicio 6</h3>
    <p>Estudiante: ${estudiante.nombre}</p>
    <p>Edad: ${estudiante.edad}</p>
    <p>Curso: ${estudiante.curso}</p>
    `
}

//Ejercicio 7 

// Definir un tipo personalizado para representar una dirección
type Direccion = {
    calle: string,
    cuidad: string,
    codPostal: number,
}
// Crear una dirección usando el tipo personalizado
const miDireccion: Direccion = {
    calle: 'Cnel Rodríguez 273',
    cuidad: 'Mendoza',
    codPostal: 5500,
}

const direccionType = document.getElementById("direccionType");
if (direccionType) {
    direccionType.innerHTML =`
    <h3>Ejercicio 7</h3>
    <p>Direccion: Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.cuidad}, CP: ${miDireccion.codPostal}</p>
    `
}

//Ejercicio 8
interface Usuario{
    nombre : string,
    correo: string,
    saludar(): string
};

const usuario1 :Usuario = {
    nombre : "Paula",
    correo: "paulag@gmail.com",
    saludar(){ return `Hola ¿Qué tal? Mi nombre es ${this.nombre}` }
};

const usuarioP = document.getElementById("usuario");
if (usuarioP) {
    usuarioP.innerHTML =`
    <h3>Ejercicio 8</h3>
    <p>${usuario1.saludar()}</p>
    `
}

//Ejercicio 9
class  Persona {
    nombre?: string;
    edad?: number

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse():string{
        return `Hola mi nombre es ${this.nombre} y  tengo ${this.edad} años`
    }
}

const persona = new Persona("Uriel", 25);

const miPresentacion = document.getElementById("presentacion");
if (miPresentacion) {
    miPresentacion.innerHTML =`
    <h3>Ejercicio 9</h3>
    <p>${persona.presentarse()}</p>
    `
};

//Ejercicio 10

class Caja<T> {
    private valor : T;
    
    constructor(valor:T){
        this.valor = valor;
    }

    obtenerValor(): T{
        return this.valor;
    }
}

const cajaString = new Caja<string>("Hola, hola, hola");
const cajaNumber = new Caja<number>(456);

const cajaSecreta = document.getElementById("cajaSecreta");
if (cajaSecreta) {
    cajaSecreta.innerHTML =`
    <h3>Ejercicio 10</h3>
    <p>Contenido de cajaDeTexto: ${cajaString.obtenerValor()}</p>
    <p>Contenido de cajaDeNumero: ${cajaNumber.obtenerValor()}</p>
    `
};
//Ejercicio 11

function identidad<T>(valor : T) : T {
    return valor;
}

const textoFuncion = identidad<string>("Texto");
const numberFuncion = identidad<number>(123456);

const identidadFuncion = document.getElementById("identidadFuncion");
if (identidadFuncion) {
    identidadFuncion.innerHTML =`
    <h3>Ejercicio 11</h3>
    <p>Identidad del Texto: ${textoFuncion}</p>
    <p>Identidad del Número: ${numberFuncion}</p>
    `
};

//Ejercicio 12

enum Color{
    Azul = "azul",
    Verde = "verde",
    Rosa = "rosa",
    Gris = "gris"
}

const coloresEnum = document.getElementById("coloresEnum");
if (coloresEnum) {
    coloresEnum.innerHTML =`
    <h3>Ejercicio 12</h3>
    <p>Color favorito: ${Color.Azul}</p>
    <p>Segundo color favorito: ${Color.Rosa}</p>
    `
};

