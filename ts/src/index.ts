// const before = require('aspectjs').before;
// let addAdvice = require('aspectjs').addAdvice;
const checkException = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log('Before method execution');
    if ((this as Bakery).Fillings.length === 0) {
      console.log('Division by zero');
      return false;
    }
    const result = originalMethod.apply(this, args);
    return result;
  };
};

class Bakery {
  Flavours: string[] = ['Strawberry', 'Vanilla', 'Chocolate'];
  Donuts: EmptyDonut[];
  Thicknesses: string[];
  Fillings: Filling[];
  constructor() {
    this.Thicknesses = ['Slim', 'Medium', 'Thick'];
    this.Donuts = [];
    this.Fillings = [];
  }

  @checkException
  checkQuantityAspect() {
    console.log(
      `this ${this.Donuts.length} / ${this.Fillings.length} = ${
        this.Donuts.length / this.Fillings.length
      }`
    );
    if (this.Donuts.length / this.Fillings.length <= 1) return true;
    else return false;
  }

  checkQuantity() {
    console.log(
      `this ${this.Donuts.length} / ${this.Fillings.length} = ${
        this.Donuts.length / this.Fillings.length
      }`
    );
    if (this.Fillings.length === 0) return false;
    if (this.Donuts.length / this.Fillings.length <= 1) return true;
    else return false;
  }

  checkQuantityInf() {
    console.log(
      `this ${this.Donuts.length} / ${this.Fillings.length} = ${
        this.Donuts.length / this.Fillings.length
      }`
    );
    if (this.Donuts.length / this.Fillings.length <= 1) return true;
    else return false;
  }

  bakeDonuts(ammount: number) {
    for (let i = 1; i <= ammount; i++) {
      this.Donuts.push(new EmptyDonut(Math.random() * 8));
    }
  }

  refillFillings(ammount: number) {
    //Choose random thickness and flavour for the donut
    for (let i = 1; i <= ammount; i++) {
      this.Fillings.push(
        new Filling(
          this.Thicknesses[Math.floor(Math.random() * this.Thicknesses.length)],
          this.Flavours[Math.floor(Math.random() * this.Flavours.length)]
        )
      );
    }
  }
}

class EmptyDonut {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

class FilledDonut extends EmptyDonut {
  fillings: Filling[];
  constructor(width: number, fillings: Filling[]) {
    super(width);
    this.fillings = fillings;
  }
}

class Filling {
  thickness: string;
  flavour: string;
  constructor(thickness: string, flavour: string) {
    this.thickness = thickness;
    this.flavour = flavour;
  }
}

// Main
let times: number[] = [];

const bakery = new Bakery();
bakery.bakeDonuts(15);
// bakery.refillFillings(10);
for (let i = 0; i < 30; i++) {
  const t0 = process.hrtime.bigint();

  if (i < 10) console.log(bakery.checkQuantityAspect());
  if (i > 10 && i < 20) console.log(bakery.checkQuantity());
  if (i > 20) console.log(bakery.checkQuantityInf());
  const t1 = process.hrtime.bigint();
  times.push(Number(t1 - t0) / 1e6);
}
// times it too for fucntion with aspect
console.log(times.slice(0, 10));
// times it too for fucntion with if statement
console.log(times.slice(10, 20));
// times it too for fucntion without any checks
console.log(times.slice(20, 30));
