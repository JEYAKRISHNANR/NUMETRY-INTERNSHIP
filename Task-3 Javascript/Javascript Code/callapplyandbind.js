function car(type,fueltype){
    this.type=type;
    this.fueltype=fueltype;
}
function setbrand(brand){
    car.call(this,"convertible","petrol");
    this.brand=brand;
    console.log(`car details = `,this);
}
function setprice(price){
    car.call(this,"convertible","diesel");
    this.price=price;
    console.log(`car price`,this)
}
const newbrand= new setbrand("lamborghini");
const newprice= new setprice(1800000);


//apply
function car(type,fueltype){
    this.type=type;
    this.fueltype=fueltype;
}
function setbrand(brand){
    car.apply(this,["convertible","petrol"]);
    this.brand=brand;
    console.log(`car details = `,this);
}
function setprice(price){
    car.apply(this,["convertible","diesel"]);
    this.price=price;
    console.log(`car price`,this)
}
const newbrand1= new setbrand("lamborghini");
const newprice1= new setprice(1800000);

//BIND
const obj = { name: 'John' };

function greet(greeting) {
console.log(`${greeting}, ${this.name}`);
}

const boundGreet = greet.bind(obj);
boundGreet('Hello'); // Output: Hello, John