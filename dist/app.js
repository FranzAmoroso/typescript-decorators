var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Mando in console");
    console.log(constructor); // Mostrerà il costruttore della classe
}
let Prova = class Prova {
    constructor() {
        console.log("Oggetto di prova");
    }
};
Prova = __decorate([
    Logger
], Prova);
//decorators factory
function Logg(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
let Prova1 = class Prova1 {
    constructor() {
        console.log("Prova");
    }
};
Prova1 = __decorate([
    Logg('Log class Prova1 del decorators Logg')
], Prova1);
let Prova2 = class Prova2 {
    constructor() {
        console.log("Prova");
    }
};
Prova2 = __decorate([
    Logg('Log class Prova2 del decorators Logg')
], Prova2);
//Template
function creaElemento(elemento, id, nome) {
    return function (constructor) {
        const container = document.getElementById(id);
        const prova3 = new Persona(nome);
        if (container) {
            container.innerHTML = elemento;
            container.querySelector('h1').textContent = prova3.nome;
        }
    };
}
let Persona = class Persona {
    constructor(nome) {
        this.nome = nome;
        console.log('creo un oggetto di prova');
    }
};
Persona = __decorate([
    creaElemento('<h2></h2>', 'container', 'Gianni')
], Persona);
