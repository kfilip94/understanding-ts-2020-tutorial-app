"use strict";
var _add;
_add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
    }
    ;
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log(phrase);
        }
    };
    return Person;
}());
var user1, user2;
user1 = new Person('Kamil');
user1.greet('Hey');
user2 = new Person();
user2.greet('Hola!');
