const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name : 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}
];

function renderTodoList() {
  let todoListHTML = '';


  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate; 
    const { name, dueDate } = todoObject;
    const html = `

    <div>
      ${name} 
    </div>

      <div>
        ${dueDate}
      </div>

      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList()
      ">Delete</button>
 
      `;
    todoListHTML += html
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;
  todoList.push( 
    {
      name,
      dueDate
    }
  );

  inputElement.value = '';

  renderTodoList()

  saveStorage();
}

function handleKeyDown(event) {
  if (event.key === 'Enter')
    {addTodo()}
}

function saveStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}



