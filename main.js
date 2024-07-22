"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123112
    };
    const printAvengers = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
    };
    const avengersArr = ['Cap. América', true, 150.145];
    const [capi, ironman, unNumero] = avengersArr;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const capitanAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, capitanAmerica, thor];
    for (const aveng of avengers) {
        console.log(aveng.name, aveng.weapon);
    }
})();
(() => {
    const nombre = "Marcelo";
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map