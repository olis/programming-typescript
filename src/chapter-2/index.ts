console.log("Hello TypeScript!");

const a = 1 + 2;
const b = a + 3;
const c = {
  apple: a,
  banana: b,
};
const d = c.apple * 4;

const e = d + c.banana;

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
const two: B = { foo: 3, bar: 4, zeh: 5 };

eins = two; // <== it works!!!
