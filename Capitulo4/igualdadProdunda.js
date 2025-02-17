function igualdadProdunda(result1, result2) {
  let type = typeof result1;
  let type2 = typeof result2;

  if (result1 === null || result2 === null) {
    console.log("Error: Cannot convert undefined or null to object");
  } else if (type && type2 === "object") {
    Object.keys(result1).forEach((key) => {
      console.log(`${key}: ${result1[key]}`);
    });
    Object.keys(result2).forEach((key) => {
      console.log(`${key}: ${result2[key]}`);
    });
  } else if (type && type2 == "number") {
    if (result1 == result2) {
      return true;
    } else {
      console.log("NÚMEROS DISTINTOS");
    }
  } else {
    console.log("Solo primitivos/objetos");
  }
}

const result1 = null;
const result2 = null;
/*
const result1 = {
  nombre: "María",
  edad: 25,
  ciudad: "Madrid",
};


const result2 = {
  nombre: "María",
  edad: 25,
  ciudad: "Madrid",
};
*/
igualdadProdunda(result1, result2);
