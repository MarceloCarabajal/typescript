(() => {

    const fullName = (firstName: string, lastName?:string, upper: boolean = false): string => {
        
        if (upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || '----'}`;
        }
    }


    const name = fullName('Marcelo', 'Carabajal', true);
    console.log({name});
})();