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


// Template Decorator: creaElemento
// Accetta un elemento HTML, un ID e un nome come parametri
function creaElemento(elemento: string, id: string, nome: string) {
    return function (constructor: any) {
        // Recupera l'elemento HTML dal DOM tramite l'ID fornito
        const container = document.getElementById(id);

        // Crea un'istanza della classe Persona con il nome fornito
        const personaInstance = new Persona(nome);

        // Se l'elemento HTML è presente nel DOM
        if (container) {
            // Imposta il contenuto dell'elemento HTML con il modello fornito
            container.innerHTML = elemento;

            // Modifica il testo dell'elemento h1 all'interno dell'elemento HTML con il nome della persona
            container.querySelector('h1')!.textContent = personaInstance.nome;
        }
    };
}

// Applica il Decorator con Template a una classe Persona
@creaElemento('<h2></h2>', 'container', 'Gianni')
class Persona {
    // Il costruttore accetta il nome come parametro e stampa un messaggio in console
    constructor(public nome: string) {
        console.log('Creo un oggetto di prova');
    }
}
