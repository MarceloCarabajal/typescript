"use strict";
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Auxilio');
    console.log('Hola mundo');
})();
