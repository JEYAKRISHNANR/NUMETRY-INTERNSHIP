const number=[1,2,3,4,5,6,7,8];
const num= number.slice(0,5);
number.splice(1,0,"100");
console.log(number);//[1, '100', 2, 3, 4, 5, 6, 7, 8]
console.log(num);//output 1 2 3 4 5 


const myHonda = {
color: "red",
wheels: 4,
engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2,"Air condition", "purchased 2000"];
const newCar = myCar.slice(0, 2);

console.log("myCar ", myCar);/*myCar = [
{ color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
2,
'cherry condition',
'purchased 1997'
]*/
console.log("newCar =", newCar);/* { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2*/