console.log("Hello TypeScript!");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

let e = d + c.banana;

type B = {
  foo: number;
  bar: number;
  zeh: number;
};

type A = {
  foo: number;
  bar: number;
};

let eins = { foo: 1, bar: 2 };
let two: B = { foo: 3, bar: 4, zeh: 5 };

eins = two; // <== it works!!!
