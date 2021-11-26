const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// buttona basdığımız zaman hadisənin işləməsi
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event){
    // buttona basdığımız zaman səhifənin yeilənməsinin qarşısını alır. 
        event.preventDefault();

    // js ilə div yarat
    const todoDiv =  document.createElement("div");
    // divə class vermək
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    todoDiv.appendChild(newTodo);
    let inputValue = todoInput.value
    saveLocalTodos(inputValue);

    // yoxlama buttonu yaratmaq
    const complateButton = document.createElement('button');
    complateButton.innerHTML = '<i class=\'fas fa-check\'></i>';
    complateButton.classList.add("complate-btn");
    todoDiv.appendChild(complateButton);

    // silme buttonu yaratmaq
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class=\'fas fa-trash\'></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}



function deleteCheck(e) {
    const item = e.target;
    // Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo  = item.parentElement;
        // Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transition', function() {
            todo.remove();
        })
    }
    
}



function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos(){
    //CHECK---HEY Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos  = JSON.parse(localStorage.getItem("todos"));
    }
    
    
    todos.forEach(function(todo){

        
 //Todo DIV
 const todoDiv = document.createElement("div");
 todoDiv.classList.add("todo");
 //Create LI 
 const newTodo = document.createElement("li");
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

 //CHECK MARK BUTTON
 const complateButton = document.createElement('button');
 complateButton.innerHTML = '<i class="fas fa-check"></i>';
 complateButton.classList.add("complate-btn");
 todoDiv.appendChild(complateButton);

 //CHECK TRASH BUTTON
 const trashButton = document.createElement('button');
 trashButton.innerHTML = '<i class="fas fa-trash"></i>';
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);

 //APPEND TO LIST
 todoList.appendChild(todoDiv);


    });





}

function removeLocalTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerHTML;
    todos.splice(todos.indexOf(todoIndex));
    localStorage.setItem('todos', JSON.stringify(todos))
}
