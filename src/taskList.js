class TaskList {
	constructor(){
		this.tasks = []
	}

	createNewTask(desc){
		const newTask = new Task(desc)
		this.tasks.push(newTask)
		return newTask
	}

	deleteTask(desc){
		this.tasks.filter((task) => task.description !== desc)
	}
}
