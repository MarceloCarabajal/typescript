(() => {

    interface Client {
        name: string;
        age?: number;
        address: Adrress;
        getFullAddress( id:string ): string;
    }

    interface Adrress {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Marcelo',
        age: 33,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa' 
        },
        getFullAddress( id: string) {
            return this.address.city
        }

    }

    const client2: Client = {
        name: 'Franco',
        age: 27,
        address: {
            id: 127,
            zip: 'ON1 BOR',
            city: 'Toronto'
        },
        getFullAddress() {
            return this.name
        }

    } 



})()