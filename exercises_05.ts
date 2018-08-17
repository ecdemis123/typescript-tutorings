// Exercise 1
class Car {
  constructor(public name: string, public acceleration: number = 0) {}

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }

  honk() {
    console.log("toot")
  }

}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
rectangle.calcSize();

// Exercise 3
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class People {
  private _firstName: string = ""
  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    }
  }

  get firstName() {
    return this._firstName;
  }
}

const person = new People();
console.log(person.firstName)
