const textSelector = document.querySelector('.colorText');
const buttonSelector = document.querySelector('button');

const myStyleProps = {
    color: ()=>{textSelector.style.color = "red"} ,
    fontSize: ()=>{textSelector.style.fontSize = "30px"},
    backgroundColor: ()=>{textSelector.style.backgroundColor = "#333"},
    display: ()=>{textSelector.style.display = "none"}
 }

// const newColor = ()=>{
//     textSelector.style.color = "red";
//     textSelector.style.fontSize = "30px";
//     textSelector.style.backgroundColor = "#333";
// }

buttonSelector.addEventListener('click', myStyleProps.display);

// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================



const createNew = ()=>{
// CRUD with node structurs
const newElement = document.createElement('h1');
const newText = document.createTextNode("New Text");

const newHeader = newElement.appendChild(newText);


const boxSelector = document.querySelector('.main-box');
boxSelector.appendChild(newHeader);
}


// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_elementreplace 

const textRmv = document.querySelector('.h2Text');
const rmvElem = ()=>{
    textRmv.remove();
}


document.querySelector('.crtBtn').addEventListener('click', createNew);
document.querySelector('.rmvBtn').addEventListener('click', rmvElem);


// function Car(model,color,name){
//     this.model = model;
//     this.color = color;
//     this.name = name;
//     // this.doorType = 4;

// }

// Car
class Car{
    constructor(model,color,name){
    this.model = model;
    this.color = color;
    this.name = name;
    // this.doorType = 4;
    }


   
 myName(name){
        return `Hello ${name}`;
    }


}

// Moto

class Moto extends  Car{

    

}


// constructor(motoNumber){
    //     this.motoNumber = motoNumber;
    // }
Car.prototype.doorType = 4;

const myMoto = new Moto();

const myCar = new Car("s500", "white", 'Mercedes');


console.log(myCar.doorType);
console.log(myMoto.myName('Rafet'));