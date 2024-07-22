(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo Salvado'
        }
    }
    class Villian extends Mutante {
        conquistarMundo(){
            'Mundo conquistado'
        }
    }

    const wolverine: Mutante = new Xmen('Wolverine', 'Logan');
    const magneto: Mutante = new Villian('Magneto', 'Magnus');

    // console.log(wolverine);
    // console.log(magneto);

    const printName = ( character: Mutante) => {
        console.log( character.name);
        
    }

    // printName(wolverine)
    

})()