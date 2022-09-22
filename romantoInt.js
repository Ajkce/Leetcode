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
   
    return num
  });
  const newarr = arr.map(items => items.value)
  let total = 0;
  for (var i = 0; i < newarr.length; i++) {
    if (newarr[i] < newarr[i + 1]) {
      total = total - newarr[i];
    } else {
      total = total + newarr[i];
    }
  }
  return total;
};

console.log(romanToInt("IV"));
