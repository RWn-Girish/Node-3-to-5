// console.log(__dirname);
// console.log(__filename);

// setTimeout(()=>{
//     console.log('Hello')
// },3000);

// Buffer URL console setTimeout setInteval __dirname __filename


// const local = require('./localModules');

// console.log(local(11,22));

const person = require('./localModules');

console.log(person.name)
console.log(person.age)
console.log(person.sayHello())