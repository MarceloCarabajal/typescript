(() => {

    /* DESESTRUCTURACION EN OBJETOS */


    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }


    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123112
    }

    // const { poder, vision } = avengers

    // console.log( poder.toFixed(2), vision.toUpperCase());
    const printAvengers = ({ ironman, ...resto }:Avengers) => {
        //console.log(ironman, resto);
    }

    //printAvengers(avengers)

    /* DESESTRUCTURACION EN ARRAYS */

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.145];

    const [ capi, ironman, unNumero] = avengersArr;
    //console.log( { ironman, capi } );
    

})()