(()=>{
    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna's Verde";
    const volcanNegro:string = `Héroe: Volcan negro`;

    const abc = 123;

    console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log( batman.toUpperCase() );
    console.log( batman[10]?.toUpperCase() || 'N0 esta presente' );
    

})();