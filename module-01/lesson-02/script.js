// 1

const a = 7;
const b = 9;

const result = a * b;
console.log("🚀 ~ result:", result);

// 2
const c = 7;
const d = 9;

const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);

out2.textContent = c / d;

// 3
const e = 3;
const f = 5;

const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;

// 4
const e1 = "3";
const f1 = 5;

const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
out4.textContent = e1 + f1;

// 5
const e2 = 4;
const f2 = 0;

const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

// 6
const e3 = 3;
const f3 = "Hello";

const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out6:", out6);
out6.textContent = e3 + f3;

// 7
const e4 = 3;
const f4 = "Hello";

const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;

// 8

const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  // option 1
  //   const userInput = input8.value;
  //   out8.textContent = userInput;

  // option 2
  out8.textContent = input8.value;
  input8.value = "";
}

// 9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = t9;

function t9() {
  out9.textContent = input9.value;
  input9.value = "";
}

const points = 2300;

if (points <= 500) {
  console.log("Level 1");
} else if (points < 1500) {
  console.log("Level 2");
} else if (points < 2500) {
  console.log("Level 3");
} else if (points < 3500) {
  console.log("Level 4");
} else {
  console.log("Level 5");
}

const isFriend = true;
const isOnline = true;
const isDenied = false;

const canOpenChat = isFriend && isOnline && isDenied ===