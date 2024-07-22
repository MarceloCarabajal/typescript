(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }
    
    const capitanAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, capitanAmerica, thor];

    for (const aveng of avengers) {
        console.log(aveng.name, aveng.weapon);   
    }



})()