// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);


// spread operator in objects

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// if any key come twice then the value of the last time occur key is updated in this key. . .

// const newObject = { ...obj2, ...obj1, key69: "value69" }; 
// const newObject = {...[1,2,3,4]} // Here automatically key will be assigned from zero. . .
// const newObject = { ...["item1", "item2"] };
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);
