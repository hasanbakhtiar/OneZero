const addToDoButton = document.querySelector("#addToDo");
const inputField = document.querySelector("#inputField");
const toDoContainer = document.querySelector("#toDoContainer");

const addElement=()=>{
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', ()=>{
        toDoContainer.removeChild(paragraph);
    })

}

addToDoButton.addEventListener('click', addElement);