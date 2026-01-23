// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = fn1;

function fn1() {
  out1.innerHTML = obj1.two;
}
// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = fn2;

function fn2() {
  out2.innerHTML = obj2["five"];
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

function fn3() {
  for (const key in obj3) {
    obj3[key] === "hi" ? (out3.innerHTML += obj3[key] + " ") : out3.innerHTML;
  }
}
// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = fn4;

function fn4() {
  let counter = 0;
  let str = "";
  for (const key in obj4) {
    // setTimeout(() => {
    str += `${key} ${obj3[key]} <br />`;
    // }, counter * 1000);
    // counter++;
  }
  obj4.innerHTML = str;
}
// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = function () {
  fn5(obj5, out5);
};

function fn5(object, selector) {
  let res = "";
  for (const key in object) {
    const value = object[key];
    res += `${key} : ${value} <br>`;

    // str += `${key} ${obj[key]} <br />`;
  }
  selector.innerHTML = res;
}
// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = fn6;

function fn6() {
  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  fn5(obj6, out6);
}

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const input9 = document.querySelector(".i-9");
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = fn9;

function fn9() {
  const searchValue = Number(input9.value);
  let result = "";
  for (const key in obj9) {
    obj9[key] === searchValue;
    // console.log(obj9[key] === searchValue);
    if (obj9[key] === searchValue) {
      // console.log([key]);
      result += `${key}`;
    }
  }
  // console.log(result);
  out9.innerHTML = result;
}

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

const test10 = 22;
const input10 = document.querySelector(".i-10");
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;

function fn10() {
  let res = "";
  for (const key in obj10) {
    if (test10 === obj10[key]) {
      out10.innerHTML = true;
      return;
    }
    {
      out10.innerHTML = false;
    }
  }
}
// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
// delete obj11.b; //Убирает ключ из объекта
// console.log("🚀 ~ obj11:", obj11);

const input11 = document.querySelector(".i-11");
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  delete obj11[input11.value];
  fn5(obj11, out11);
}
// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

const input12 = document.querySelector(".i-12");
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = fn12;

function fn12() {
  const key = input12.value;
  for (const key in obj12) {
    if (value === obj12[key]) {
      delete obj12[key];
    }
  }
  fn5(obj12, out12);
}
// Task 13
const obj13 = {
  three: 5,
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
  two: 8,
  a: NaN,
};

const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = fn13;

function fn13() {
  let total = 0;

  for (const key in obj13) {
    // console.log("🚀 ~ fn13 ~ obj13:", obj13[key]);
    if (typeof obj13[key] === "number" && !Number.isNaN(+obj13[key])) {
      total += obj13[key];
    }
  }
  out13.innerHTML = total;
}

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
