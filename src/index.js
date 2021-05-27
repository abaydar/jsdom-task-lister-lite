document.addEventListener("DOMContentLoaded", () => {
  
});

const main = document.querySelector("#main-content")

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const newTask = document.querySelector("#new-task-description").value
    // const taskItem = document.createElement("li")
    // taskItem.innerText = `${newTask}`
    // taskList.appendChild(taskItem)
    taskList.innerHTML += `
    <li>${newTask}
    <button data-action="delete">X</button>
    </li>
    `    
    taskForm.reset()
    
}

taskList.addEventListener("click", handleClick)

function handleClick(e){
    if (e.target.dataset.action === "delete") {
        e.target.parentElement.remove()
    }
}
