document.getElementById('ToDo').addEventListener('submit', function (event) {
    event.preventDefault();

    let title = document.getElementById('addTitle').value;
    let text = document.getElementById('addText').value;

    if (title && text) {
        let taskList = document.getElementById('ToDoList');
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
        <button class="DeleteToDo">DeleteToDo</button>
      `;
        taskList.appendChild(taskDiv);

        document.getElementById('addTitle').value = '';
        document.getElementById('addText').value = '';

        let deleteBtn = taskDiv.querySelector('.DeleteToDo');
        deleteBtn.addEventListener('click', function () {
            taskDiv.remove();
        });
    }
});
