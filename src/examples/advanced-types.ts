type Admin = {
  name: string,
  privilages: string[]
};

type Employee = {
  name: string,
  startDate: Date
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Kamil',
  privilages: ['start-server'],
  startDate: new Date()
};

type Combinable2 = number | string;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

function addCombinable(a: number, b: number): number;
function addCombinable(a: string, b: string): string;
function addCombinable(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${a}${b}`
  }
  return a + b;
};

const result2 = addCombinable('Kamil', 'Filip');

const fetchedUserData = {
  id: 'u1',
  name: 'Kamil',
  job: { title: 'CEO' }
};

console.log(fetchedUserData?.job?.title);

const userInput3 = null;
const storedData = userInput3 ?? 'DEAFULT';


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ',emp.name);
  if ('privilages' in emp) {
    console.log('Privilages: ', emp.privilages);
  }
  if ('startDate' in emp) {
    console.log('Start date: ', emp.startDate);
  }
};

printEmployeeInformation(e1);

class Car {
   drive() {
     console.log('Driving...');
   }
};

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo: ', amount);
  }
};

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(955);
  }
}

useVehicle(new Car());
useVehicle(new Truck());


interface Bird {
  type: 'bird',
  flyingSpeed: number
}

interface Horse {
  type: 'horse',
  runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  };
  console.log('Moving at speed: ',speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 12 });

const userInput1 = <HTMLInputElement>document.getElementById('input-1')!;
//const userInput2 = document.getElementById("input-2")! as HTMLInputElement;
const userInput2 = document.getElementById("input-2");

userInput1.value = "Hi here!";

if (userInput2) {
  (userInput2 as HTMLInputElement).value = "Hello there!";
};

interface ErrorContainer {
  [prop: string]: string 
};

const errorBag: ErrorContainer = {
  email: 'Invalid number!',
  username: 'Must start with a capital characters!',
  1: 'Invalid face!'
};