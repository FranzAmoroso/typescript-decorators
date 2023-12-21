function Logger(constructor: Function) {
    console.log("Mando in console");
    console.log(constructor); // Mostrerà il costruttore della classe
}

@Logger
class Prova {
    constructor() {
        console.log("Oggetto di prova");
    }
}


//decorators factory
function Logg(messaggio: string){
    return function(constructor:any){
        console.log(messaggio);
        console.log(constructor);
        
    }
}

@Logg('Log class Prova1 del decorators Logg')
class Prova1{
    constructor(){
        console.log("Prova");
        
    }
}

@Logg('Log class Prova2 del decorators Logg')
class Prova2{
    constructor(){
        console.log("Prova");
        
    }
}


//Template
function creaElemento(elemento:string, id:string, nome: string){
    return function(constructor:any){
        const container = document.getElementById(id)
        const prova3 = new Persona(nome)
        if(container){
            container.innerHTML = elemento
            container.querySelector('h1')!.textContent = prova3.nome
        }
    }
}


@creaElemento('<h2></h2>','container','Gianni')
class Persona{ 
    constructor(public nome: string){
        console.log('creo un oggetto di prova');
        
    }
}