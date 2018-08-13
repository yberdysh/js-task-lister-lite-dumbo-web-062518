
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const theForm = document.querySelector('#create-task-form')
  console.log(theForm)
  const inputField = document.querySelector('#new-task-description');
  const tasks = document.getElementById('tasks')

  theForm.addEventListener("submit", (e) => {
  	const value = inputField.value
  	e.preventDefault()
  	const task = taskList.createNewTask(value)


  	tasks.innerHTML += `<li>${task.description}</li>`
  })

});
