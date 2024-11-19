const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('#todo-list');

function paintToDo(newToDo) {
    console.log("i will paint", newToDo)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value)
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);