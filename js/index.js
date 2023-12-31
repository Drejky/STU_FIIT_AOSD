// const before = require('aspectjs').before;
const around = require('aspectjs').around;
// let addAdvice = require('aspectjs').addAdvice;

class Bakery {
  constructor() {
    this.Flavours = ['Strawberry', 'Vanilla', 'Chocolate'];
    this.Thicknesses = ['Slim', 'Medium', 'Thick'];
    this.Donuts = [];
    this.Fillings = [];
  }

  checkQuantity = () => {
    console.log(
      `this ${this.Donuts.length} / ${this.Fillings.length} = ${
        this.Donuts.length / this.Fillings.length
      }`
    );
    if (this.Donuts.length / this.Fillings.length <= 1) return true;
    else return false;
  };

  checkQuantityIf() {
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

  bakeDonuts = (ammount) => {
    for (let i = 1; i <= ammount; i++) {
      this.Donuts.push(new EmptyDonut(Math.random() * 8));
    }
  };

  refillFillings = (ammount) => {
    //Choose random thickness and flavour for the donut
    for (let i = 1; i <= ammount; i++) {
      this.Fillings.push(
        new Filling(
          this.Thicknesses[Math.floor(Math.random() * this.Thicknesses.length)],
          this.Flavours[Math.floor(Math.random() * this.Flavours.length)]
        )
      );
    }
  };
}

class EmptyDonut {
  constructor(width) {
    this.width = width;
  }
}

class FilledDonut extends EmptyDonut {
  constructor(width, fillings) {
    super(width);
    this.fillings = fillings;
  }
}

class Filling {
  constructor(thickness, flavour) {
    this.thickness = thickness;
    this.flavour = flavour;
  }
}

// Main
const bakery = new Bakery();
let times = [];

adviser = {
  override: (invocation) => {
    if (bakery.Fillings == 0) {
      console.error('Dividing by zero');
      return -1;
    }
    return invocation.proceed();
  },
};

around(bakery, 'checkQuantity').add(adviser, 'override');

bakery.bakeDonuts(15);
// bakery.refillFillings(10);
for (let i = 0; i < 30; i++) {
  const t0 = process.hrtime.bigint();

  if (i < 10) console.log(bakery.checkQuantity());
  if (i > 10 && i < 20) console.log(bakery.checkQuantityIf());
  if (i > 20) console.log(bakery.checkQuantityInf());
  const t1 = process.hrtime.bigint();
  times.push(Number(t1 - t0) / 1e6);
}
console.log(times.slice(0, 10));
console.log(times.slice(10, 20));
console.log(times.slice(20, 30));
