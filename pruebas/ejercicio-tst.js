const ejercicio = require("../funciones/ejercicio");
const expect = require("chai").expect;

describe("caso de prueba entrevista", () => {

    it ("pruebo error 404", ()=> {
        var number='';
        expect(ejercicio.Add(number)).to.equals(0);
    })

    it ("pruebo resultado sea el que corresponda", ()=> {
        var number='1';
        expect(ejercicio.Add(number)).to.equals(1);
    })

    it ("pruebo sumar numeros separados por coma(,)", ()=> {
        var number='4,3';
        expect(ejercicio.Add(number)).to.equals(7);
    })

    it ("pruebo sumar una secuencia de numeros separados por coma(,)", ()=> {
        var number='1,2,3,4,5';
        expect(ejercicio.Add(number)).to.equals(15);
    })

    it ("pruebo sumar una secuencia de numeros con distintos separadores", ()=> {
        var number='1,2\n3';
        expect(ejercicio.Add(number)).to.equals(6);
    })

    it ("pruebo sumar una secuencia de numeros con distintos separadores", ()=> {
        var number='//;\n1;2;3';
        expect(ejercicio.Add(number)).to.equals(6);
    })

});
