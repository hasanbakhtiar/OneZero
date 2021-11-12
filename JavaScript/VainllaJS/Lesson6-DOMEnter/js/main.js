// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_cleartimeout
const navSelector = document.querySelector('nav');
const buttonSelector = document.querySelector('.myBtn');
const linkSelector = document.querySelectorAll('a');

const lightMod = ()=>{
    navSelector.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light";
    for (let index = 0; index < 6; index++) {
        linkSelector[index].style.color = '#000';
        
    }
}

const darkMod = ()=>{
    navSelector.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark";
    for (let index = 0; index < 6; index++) {
        linkSelector[index].style.color = 'rgb(0,255,0)';
        
    }
}


// buttonSelector.addEventListener('mousedown', darkMod);
// buttonSelector.addEventListener('mouseup', darkMod);
// buttonSelector.addEventListener('mouseover', darkMod);
// buttonSelector.addEventListener('mouseout', darkMod);
buttonSelector.addEventListener('click', darkMod);
buttonSelector.addEventListener('dblclick', lightMod);


const currentTime = document.querySelector('.currentTime');
const currentTimeButton = document.querySelector('.currentTimeButton');

const myTime=()=>{
    currentTime.innerHTML = new Date().getSeconds();
}
const intTime = setInterval(myTime, 1000)

const stopTime =()=>{
    clearInterval(intTime);
}

const playTime =()=>{
    setInterval(myTime, 1000);
}
currentTimeButton.addEventListener('click',stopTime);
currentTimeButton.addEventListener('dblclick',playTime);
