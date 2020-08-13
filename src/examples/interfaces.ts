interface AddFn {
  (a: number, b:number): number;
}

let _add: AddFn;

_add = (n1: number, n2: number) => {
  return n1 + n2;
};


interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}


class Person implements Greetable {
  age = 30;

  constructor(public name?: string) {};

  greet(phrase: string){
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log(phrase);
    }
  }
}

let user1, user2: Greetable;

user1 = new Person('Kamil');
user1.greet('Hey');

user2 = new Person();
user2.greet('Hola!')