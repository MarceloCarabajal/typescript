(() => {

    const fullName = (firstName: string, lastName:string): string => {
        
        return `${firstName} ${lastName}`;
    }


    const name = fullName('Marcelo', 'Carabajal');
    console.log({name});
})();