
// ES5
// function Car (){
//     return 'Hello';
// }

// ES6
// const Car =()=>{
//     return 'Hello'
// }

// ES7
// class Car {
//     constructor(){
//         return 'Hello';
//     }
// }

// const infoCar = new Car();
// console.log(infoCar);

class infoData {
    constructor(name,year){
            this.addName = name;
            this.addYear = year;
    }
    calculateAge(){
        return `My name is ${this.addName},`+`Im ` +(new Date().getFullYear() - this.addYear);
    }
    sayHi(){
        return 'Hello';
    }
}


class infoPush extends infoData{

    learn(teach){
        return `${teach} learning React`;
    }
   
}
const myData = new infoData("Rafet", 1999);
const myInfo = new infoPush();

console.log(myData.calculateAge());
console.log(myInfo.sayHi());
console.log(myInfo.learn("Rafet"));



