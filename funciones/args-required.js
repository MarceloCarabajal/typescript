"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Marcelo', 'Carabajal');
    console.log({ name });
})();
