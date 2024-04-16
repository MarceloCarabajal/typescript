"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Fernando',
        age: 20,
        powers: ['superpoder', 'superpoder2'],
        getNombres: () => 'Fernando'
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
