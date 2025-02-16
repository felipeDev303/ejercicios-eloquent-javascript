function igualdadProdunda(result1, result2) {
  let type = typeof result1;
  let type2 = typeof result2;

  if (type && type2 == "number") {
    if (result1 == result2) {
      console.log("NÚMEROS IGUALES");
    } else {
      console.log("NÚMEROS DISTINTOS");
    }
  } else if (type && type2 === "object") {
    const OBJECT1 = Object.entries(result1).map((entry) => {
      const [key, value] = entry;
      console.log({ key, value });
    });

    const OBJECT2 = Object.entries(result2).map((entry) => {
      const value = result2[key];
      console.log(key, value);
    });
  } else {
    console.log("Guarda los dientes ministro");
  }
}

//let result1 = 1; //{ news: [], profiles: { user: [] } };
//let result2 = 2; // { news: [], profiles: { user: [] } };

igualdadProdunda(1, []);

/* KEY
const mappedResults = Object.keys(results1).map(key => {
    console.log(key)
})

// VALUE
const mappedResults = Object.keys(results1).map(key => {
    const value = results1[key]
    console.log(value)

})

 OBJECT VALUE
const OBJECT = Object.values(results2);
console.log(OBJECT);

// OBJECT ENTRIES
const OBJECT2 = Object.entries(results2);
console.log(OBJECT2);

// OBJECT ENTRIES
const OBJECT3 = Object.entries(results2).map((entry) => {
  const [key, value] = entry;
  console.log({ key, value });
});*/
