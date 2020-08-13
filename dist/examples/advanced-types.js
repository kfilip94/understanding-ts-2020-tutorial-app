"use strict";
var _a;
var e1 = {
    name: 'Kamil',
    privilages: ['start-server'],
    startDate: new Date()
};
function addCombinable(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return "" + a + b;
    }
    return a + b;
}
;
var result2 = addCombinable('Kamil', 'Filip');
var fetchedUserData = {
    id: 'u1',
    name: 'Kamil',
    job: { title: 'CEO' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput3 = null;
var storedData = userInput3 !== null && userInput3 !== void 0 ? userInput3 : 'DEAFULT';
function printEmployeeInformation(emp) {
    console.log('Name: ', emp.name);
    if ('privilages' in emp) {
        console.log('Privilages: ', emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start date: ', emp.startDate);
    }
}
;
printEmployeeInformation(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
;
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo: ', amount);
    };
    return Truck;
}());
;
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(955);
    }
}
useVehicle(new Car());
useVehicle(new Truck());
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    ;
    console.log('Moving at speed: ', speed);
}
;
moveAnimal({ type: 'bird', flyingSpeed: 12 });
var userInput1 = document.getElementById('input-1');
var userInput2 = document.getElementById("input-2");
userInput1.value = "Hi here!";
if (userInput2) {
    userInput2.value = "Hello there!";
}
;
;
var errorBag = {
    email: 'Invalid number!',
    username: 'Must start with a capital characters!',
    1: 'Invalid face!'
};
