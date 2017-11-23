Vue.component('task-list',{
	template: `
		<div class="col-sm-6">
			<ul><task v-for="task in tasks"> {{ task.task }} </task></ul>
			
		</div>
	`,

	data(){
		return{
			tasks: [
				{ task: "Go to store", completed: true },
				{ task: "Pay bills", completed: true },
				{ task: "Pet dog", completed: true },
				{ task: "Drink liquor", completed: true },
				{ task: "Go fishing", completed: false }
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>',

	data(){
		return{
			thing: "hello"
		};
	} 
});

new Vue({
	el: '#root',

	data: {
		className: 'btn-success',
		title: "This is the title",
		disabled: false,
		message: "Hello World",
		newTask:"",
		tasks: [
			{ description: "Go to store", completed: true },
			{ description: "Pay bills", completed: true },
			{ description: "Pet dog", completed: true },
			{ description: "drink liquor", completed: true },
			{ description: "Go fishing", completed: false },


		]
	},
	methods: {
		toggleClass(){
			this.className = 'btn-danger';
			this.disabled = true;
		},
		completeTask(task){
			task.completed = !task.completed;
		},
		addTask(newTask){
			this.tasks.push({ description:newTask, completed:false });
			this.newTask = "";
		}
	},
	computed: {
		reversedMessage(){
			return this.message.split('').reverse().join('');
		},
		incompleteTasks(){
			return this.tasks.filter(task => !task.completed);
		},
		completeTasks(){
			return this.tasks.filter(task => task.completed);
		}

	}
});