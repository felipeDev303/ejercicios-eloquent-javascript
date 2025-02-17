function areObjEquals(obj1, obj2) {
  // Estado inicial
  let equal = true;

  // Bucle for of que recorre por key,value de obj1
  for (let [key, val] of Object.entries(obj1)) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] !== val) {
        equal = false;
      }
    } else {
      equal = false;
    }

    if (!equal) {
      break;
    }
  }

  return equal;
}
