// Task-1
const btn1 = (document.querySelector(".b-1").onclick = f1);
const ar1 = ["random", true, 2, 15, -5];

function f1() {
  const out1 = document.querySelector(".out-1");

  out1.textContent = `[ ${ar1} ]`;
}
// Task-2

const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];

btn2.onclick = fn2;

function fn2() {
  const out2 = document.querySelector(".out-2");
  let result = "";
  for (const item of ar2) {
    result = +`${item} `;
  }
  out2.textContent = result;
}

// Task-3
const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
  const out3 = document.querySelector(".out-3");
  let result = "";
  for (const item of ar3) {
    result = +`${item} `;
  }
  out3.textContent = result;
}
// Task-4

// Task-5

// Task-6

// Task-7

// Task-8

// Task-9

// Task-10

// Task-11

// Task-12

// Task-13

// Task-14

// Task-15

// Task-16

// Task-17

// Task-18

// Task-19

// Task-20
