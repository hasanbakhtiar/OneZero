const selectBtnOne = document.querySelector('#btnOne');
const selectBtnTwo = document.querySelector('#btnTwo');
const selectInput = document.querySelector('input');
const selectCon = document.querySelector('#toDoContainer');





function addElem() {
    const createElem = document.createElement('p');
    const value = createElem.innerText = selectInput.value;
    localStorage.setItem('todo', value);

    selectCon.appendChild(createElem);

    selectInput.value = "";

    createElem.addEventListener('click', () => {
        const classNameLs = localStorage.getItem('className');
        createElem.classList.add(classNameLs);

    });




}

    selectCon.innerHTML = localStorage.getItem('todo')
   

selectBtnOne.addEventListener('click', addElem);
selectBtnTwo.addEventListener('click', lSElem);






