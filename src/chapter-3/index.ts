// Exercises

const chapter3 = () => {
  // 1. For each of these values, what type will TypeScript infer?
  const a = 1042; // number
  const b = "apples and oranges"; // string
  const c = "pineapples"; // 'pineapples'
  const d = [true, true, false]; // boolean[]
  const e = { type: "ficus" }; // {type: string}
  const f = [1, false]; // (number | boolean)[]
  const g = [3]; // number[]
  const h = null; // null --> any
};
