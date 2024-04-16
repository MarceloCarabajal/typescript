(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getNombres?: () => string;
    }

    let flash: Hero = {
        name : 'Barry',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    }

    let superman: Hero = {
        name : 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
        getNombres(){
            return this.name;
        }
    }
    

})();