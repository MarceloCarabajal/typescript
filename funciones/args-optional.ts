(() => {

    const fullName = (firstName: string, lastName?:string): string => {
        
        return `${firstName} ${lastName || '----'}`;
    }


    const name = fullName('Marcelo');
    console.log({name});
})();