//
// let answer = null;
// let counter = 0;
// do {
//   answer = +prompt("Guess a number between 1-100");

//   if (answer === 39 && !Number.isNa(answer)) {
//     console.log("You win");
//   } else {
//     answer = 1;
//     counter += 1;
//   }
// } while (answer && counter < 5);

//

// const points = 2300;
// if (points <= 500) {
//   console.log("Level 1");
// } else if (points < 1500) {
//   console.log("Level 2");
// } else if (points < 2500) {
//   console.log("Level 3");
// } else if (points < 3500) {
//   console.log("Level 4");
// } else {
//   console.log("Level 5");
// }

//

const names = ["Mango", "Poly", "Ajax"];
console.log("🚀 ~ names:", names);
const clients = Array(1, 2, 3);
console.log("🚀 ~ clients:", clients);

//

const courses = ["HTML", "Java", "Rust", "C#", "React"];
console.table(courses);

const lastElemIndex = courses.length - 1;
console.log("🚀 ~ lastElemIndex:", lastElemIndex);
console.log("🚀 ~ courses[lastElemIndex]:", courses[lastElemIndex]);

// const markup = [
//   "<li>Item 1</li>",
//   "<li>Item 1</li>",
//   "<li>Item 1</li>",
//   "<li>Item 1</li>",
// ];
// console.log(markup.join(""));
// list.innerHTML = markup.join("");

const newCourses = ["Design", "AI course"];
const newCourses1 = ["Data Science", "Machine Learning"];

const updatedCourses = newCourses1.concat(newCourses, courses);
console.log("🚀 ~ updatedCourses:", updatedCourses);

const courseIndex = courses.indexOf("React");
console.log("🚀 ~ courseIndex:", courseIndex);

if (courseIndex < 0) {
  alert("Course didn't appear");
}

courses.pop();
courses.push("C++");
console.table(courses);

// Площадь прямоугольника

const values = "8 11";
const sides = values.split(" ");
console.log("🚀 ~ sides:", sides);

for (const side of sides) {
  const currElIdx = sides.indexOf(side);
  sides[currElIdx] = Number(side);
}

const square = sides[0] * sides[1];
console.log("🚀 ~ square:", square);

// const newSides = [];
// for (let side of sides) {
//   newSides.push(+side);
// }

// console.log("🚀 ~ newSides:", newSides);

//

const value = [2, 17, 94, 1, 23, 37];
let min = values[0];

for (let i = 1; i < values.length; i++) {
  const currEl = values[i];
  // const nextEl = values[i + 1];

  if (min > currEl) {
    min = currEl;
  }
}

console.log(min);

//

const counter = {
  value: 0,
  increment(value) {
    this.value += value;
  },
  decrement(value) {
    this.value -= value;
  },
};

const updatedCounter = function (value, operation) {
  operation(value);
};

const increaseCounterValue = counter.increment;
const decreaseCounterValue = counter.decrement;

updatedCounter(13, counter.increment.bind(counter));
updatedCounter(7, counter.decrement.bind(counter));
console.log(counter);

//

const calc = (a, operation, b) => {
  ({
    "+": +a + +b,
    "-": +a - +b,
    "*": +a * +b,
    "/": +a / +b,
  })[operation];
};

console.log(calc(3, "*", 4)); // 12

//

const employee = {
  baseSalary: 1000,
  overtime: 10,
  rate: 20,

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

const employeeSalary = employee.getWage();
console.log("🚀 ~ employeeSalary:", employeeSalary);

//

class CoffeeMachine {
  maker;
  model;
  waterTank;
  power;

  constructor(maker, model, waterTank, power) {
    this.maker = config.maker;
    this.model = config.model;
    this.waterTank = config.waterTank;
    this.power = config.power;

    const isPowered = this.checkPowerCap(config.power);
    if (isPassed) {
      return "All guchi";
    }
  }

  checkPowerCap(powerValue) {
    if (powerValue <= 0) {
      console.warn("Мощьность не может быть меньше 0");
      return false;
    } else {
      return true;
    }
  }
}

// const philipsConfig {
//   maker: "Philips",
//   model: "3321",
//   waterTank; 1.4,
//   power: 1480,
// }

const philips = new CoffeeMachine(philipsConfig);

console.log("🚀 ~ philips:", philips);
