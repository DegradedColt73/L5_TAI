"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    substract(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    modul() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    toString() {
        console.log('Rzeczywista: ', this.real, ', ', "Urojona: ", this.imaginary);
    }
}
let a = new Complex(5, 3);
let b = new Complex(2, 3);
let add = a.add(b);
add.toString();
let substract = add.substract(a);
substract.toString();
let modul = substract.modul();
console.log(modul);
