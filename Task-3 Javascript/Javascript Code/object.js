
function car(name,model,engine){
    this.name=name;
    this.model=model;
    this.engine=engine;
    this.print= function(){
        console.log(`Hello, name of the car is ${this.name} , model - ${this.model} and engine -${this.engine}`);
    }
}
let company = new car('Audi','A-6','1998cc');
company.print(); //output -Hello, name of the car is Audi , model - A-6 and engine -1998cc

//object literals
let student={
    name:'jey',
    age:21,
    departement:'IT'
};

console.log(student.name);//output- jey

//Object.create() method:
const persondetails = {
  print() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const person = Object.create(persondetails);
person.name = 'krish';
person.age = 21;

person.print(); // output- Hello, my name is krish and I am 21 years old.

//Using es6 classes
class car1{
    constructor(name,model,engine){
        this.name=name;
    this.model=model;
    this.engine=engine;
    }
}
let company1=new car1('BMW','GT','1998CC');
console.log(company1.name);//output - BMW
