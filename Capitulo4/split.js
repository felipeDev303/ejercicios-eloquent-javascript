const str = "The quick brown fox jumps over the lazy dog.";

// Si se omite el separador, se crea una copia del string
console.log(str.split()); // [ 'The quick brown fox jumps over the lazy dog.' ]

const copyString = str.split(); // [ 'The quick brown fox jumps over the lazy dog.' ]

console.log(str.split(""));
/*
[
  'T', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]
*/
console.log(str.split(" "));
/*
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]
*/
const words = str.split(" ");
console.log(words[3]); // fox

const chars = str.split("");
console.log(chars[8]); // k
