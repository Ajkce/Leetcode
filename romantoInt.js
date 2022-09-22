const [I, V, X, L, C, D, M] = [1, 5, 10, 50, 100, 500, 1000];
const values = [
  { item: "I", value: 1 },
  { item: "V", value: 5 },
  { item: "X", value: 10 },
  { item: "L", value: 50 },
  { item: "C", value: 100 },
  { item: "D", value: 500 },
  { item: "L", value: 1000 },
];
const romanToInt = function (s) {
  const roman = s.split("");
  const arr = roman.map((item) => {
    const num = values.find((items) => items.item === item);
    return num.value;
  });
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      total = total - arr[i];
    } else {
      total = total + arr[i];
    }
  }
  return total;
};

console.log(romanToInt("X"));
