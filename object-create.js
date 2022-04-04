//1. using object literal

const student = {name: 'hasan', age: 43,};

// 2.constructor
const parson = new Object();

// 3. Custom and Null objects

// const human = object.create(null);
const human = Object.create(student);
// console.log(human);

// 4. Class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People('manush', 12);
console.log(peop);

// 5. function 

function Manush(name, age){
    this.name = name;
    this.age = age;
}
const man = new Manush('kader', 23);
console.log(man);