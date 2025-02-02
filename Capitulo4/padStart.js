const str = "5";
console.log(str.padStart(10, "0")); // 0000000005

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber); // ************5581
