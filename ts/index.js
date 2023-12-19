// const before = require('aspectjs').before;
// let addAdvice = require('aspectjs').addAdvice;
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var foo = function (target, propertyKey, descriptor) {
  var originalMethod = descriptor.value;
  descriptor.value = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    console.log('Before method execution');
    var result = originalMethod.apply(this, args);
    console.log('After method execution');
    return result;
  };
};
var Bakery = /** @class */ (function () {
  function Bakery() {
    this.Flavours = ['Strawberry', 'Vanilla', 'Chocolate'];
    this.Thicknesses = ['Slim', 'Medium', 'Thick'];
    this.Donuts = [];
    this.Fillings = [];
  }
  Bakery.prototype.checkQuantity = function () {
    console.log(
      'this '.concat(this.Donuts.length, ' / ').concat(this.Fillings.length)
    );
    if (this.Donuts.length / this.Fillings.length <= 1) return true;
    else return false;
  };
  Bakery.prototype.bakeDonuts = function (ammount) {
    for (var i = 1; i <= ammount; i++) {
      this.Donuts.push(new EmptyDonut(Math.random() * 8));
    }
  };
  Bakery.prototype.refillFillings = function (ammount) {
    //Choose random thickness and flavour for the donut
    for (var i = 1; i <= ammount; i++) {
      this.Fillings.push(
        new Filling(
          this.Thicknesses[Math.floor(Math.random() * this.Thicknesses.length)],
          this.Flavours[Math.floor(Math.random() * this.Flavours.length)]
        )
      );
    }
  };
  __decorate([foo], Bakery.prototype, 'bakeDonuts', null);
  return Bakery;
})();
var EmptyDonut = /** @class */ (function () {
  function EmptyDonut(width) {
    this.width = width;
  }
  return EmptyDonut;
})();
var FilledDonut = /** @class */ (function (_super) {
  __extends(FilledDonut, _super);
  function FilledDonut(width, fillings) {
    var _this = _super.call(this, width) || this;
    _this.fillings = fillings;
    return _this;
  }
  return FilledDonut;
})(EmptyDonut);
var Filling = /** @class */ (function () {
  function Filling(thickness, flavour) {
    this.thickness = thickness;
    this.flavour = flavour;
  }
  return Filling;
})();
function around(target, propertyKey, descriptor) {
  var originalMethod = descriptor.value;
  descriptor.value = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    console.log('Before method execution');
    var result = originalMethod.apply(this, args);
    console.log('After method execution');
    return result;
  };
  return descriptor;
}
// Main
var bakery = new Bakery();
// bakery.refillFillings(10);
bakery.bakeDonuts(15);
console.log(bakery.checkQuantity());
console.log('End of program');
