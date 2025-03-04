/*
const beers = [
  { name: "heineken", price: 1000, alcohol: 5 },
  { name: "bud", price: 1200, alcohol: 4 },
  { name: "corona", price: 1300, alcohol: 4.5 },
];

const wines = [
    { name: "carmenere", price: 3000, alcohol: 10 },
    { name: "chardonnay", price: 3300, alcohol: 9 },
    { name: "cabernet sauvignon", price: 2900, alcohol: 11 },
  ];
*/

// Método Reduce + Método Concat: aplanar un array de array

const num = [
  [1, 2],
  [3, 4],
];

const letras = [
  ["A", "B"],
  ["C", "D"],
];

const aplanar = num.reduce((a, b) => a.concat(b), []);
console.log(aplanar);
