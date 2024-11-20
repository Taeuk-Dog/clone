const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos"
const toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove()
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="X";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

function sayHello() {
    console.log("hello")
}

toDoForm.addEventListener('submit', handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos);
if (saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello)
}