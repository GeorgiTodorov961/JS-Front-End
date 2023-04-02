// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const titleInput = document.getElementById('title')
    const loadBtn = document.getElementById('load-button')
    const addBtn = document.getElementById('add-button')
    const todoListContainer = document.getElementById('todo-list')
  
    loadBtn.addEventListener("click", loadTasksHandler)
    addBtn.addEventListener("click", addTaskHandler)
    function loadTasksHandler(event) {
        if (event){
            event.preventDefault()
        }
  
        todoListContainer.innerHTML = ''
        fetch(BASE_URL)
            .then((data) => data.json())
            .then((tasksRes) => {
                const tasks = Object.values(tasksRes)
                for (const {_id, name} of tasks) {
                    const li = document.createElement('li')
                    const span = document.createElement('span')
                    const removeBtn = document.createElement('button')
                    const editBtn = document.createElement('button')
  
                    li.id = _id
                    span.textContent = name
                    removeBtn.textContent = 'Remove'
                    editBtn.textContent = 'Edit'
  
                    editBtn.addEventListener("click", loadEditFormHandler)
                    removeBtn.addEventListener("click", removeTaskHandler)
  
                    li.append(span, removeBtn, editBtn)
                    todoListContainer.appendChild(li)
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

attachEvents();
