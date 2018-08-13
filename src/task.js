class Task {
	constructor(description){
		this.description = description
	}

	render(){
		`<li><${this.description}/li>`
	}
}
