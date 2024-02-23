const todoList = [{
    name: 'wach movie',
    dueDate: '2032-12-23'
},
{
    name: 'make dinne',
    dueDate: '2052-2-13'
}];
renderTodo();
function renderTodo() {

    let todoListHTML = '';
    for (let index = 0; index < todoList.length; index++) {
        const todoObject = todoList[index];
        const { name, dueDate } = todoObject;
        const todoHTML =
            `<div >${name}</div>
             <div>${dueDate}</div>
                <button onclick = "
                todoList.splice(${index},1)
                renderTodo();
                " class ="delete-button">
                Delete
            </button >`;
        todoListHTML += todoHTML;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value;

    todoList.push({ name, dueDate });
    inputElement.value = '';
    renderTodo();
} 