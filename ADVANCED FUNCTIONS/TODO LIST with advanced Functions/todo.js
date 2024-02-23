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
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delete-todo-button js-delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodo();
            });
        });

}




document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
})
function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value;

    todoList.push({ name, dueDate });
    inputElement.value = '';
    renderTodo();
} 