class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso}kg. - ${this.edad} años`;
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre}: ${this.peso}kg. - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion(){
        return `${this.nombre}: ${this.peso}kg. - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion(){
        return `${this.nombre}: ${this.peso}kg. - ${this.edad} años - ${this.color}`;
    }
}

let perro1 = new Perro('Aquiles', 8, 6, 'Chihuahueño');
let gato1 = new Gato('Coqueta', 2, 2, 'hembra');
let conejo1 = new Conejo('Valquiria', 3, 2, 'blanco');

let animales = [perro1, gato1, conejo1];

// Revisar que hice mal y hacer que aparezca un li para info

// function botonVerMascota(){
//     let miUl = document.getElementById('primerDato');
//     let miLi = document.createElement('li');
//     miLi.textContent = 'Nombre';
//     miUl.appendChild(miLi);
 
// }


function botonVerMascota(){
    let lista = document.getElementById('listaAnimales');

    for (let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }

}