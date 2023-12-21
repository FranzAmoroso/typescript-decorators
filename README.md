# Typescript Decorators
Viene messo prima di ogni componente, ogni componente ha un decoratore.
sono delle funzioni che applichiamo alle classi con la chicciola ( @ ).
- Per abilitare i decorators, è necessario impostare l'opzione "experimentalDecorators" su true nel file tsconfig.json e decommentarlo.

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


## Decorator Factory
una dectorator factory non è altro un decorators a cui passiamo dei parametri. Con una sola funzione possiamo definire più decorators e passargli parametri diversi


    
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
In questo esempio, Logg è un decorator factory che restituisce un decorator. Quando applichiamo il decorator a una classe, possiamo passare un messaggio specifico che verrà stampato in console.

## Decorators whit template
I decorators con template consentono di definire decorators che accettano template con parametri, E' Possibile ottenere questa funzionalità sfruttando l'uso tagged template literals
    

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
In questo esempio, creaElemento è un decorator con template che accetta template strings con parametri. Questo può essere utile per creare dinamicamente elementi HTML basati su un modello.