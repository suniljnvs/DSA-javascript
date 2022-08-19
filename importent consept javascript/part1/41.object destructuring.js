// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName); //bandName is treated as the variable. . .
console.log(typeof bandName) // String
console.log(typeof bandName === string) // false
console.log(typeof bandName === "string") // true because the typeof operator return in string. . .
console.log(restProps); // restProps is a object here. . .
