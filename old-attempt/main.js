Vue.component('tasks',{
	props: ['list'],

	template: '#tasks-template',

	computed:{
		remaining: function(){

			return this.list.filter(this.isInProgress).length;
		}
/*		remaining: function(){
			return this.list.filter(function(task){
				return ! task.completed;
			}).length;
		}*/
	},

	methods: {
		isCompleted: function(task){
			return task.completed;
		},
		
		isInProgress: function(task){
			return ! this.isCompleted(task);
		},
		deleteTask: function(task){
			this.list.$remove(task);
		},
		clearCompleted: function(){
			this.list = this.list.filter(this.isInProgress);
		}
	}

	


});

new Vue({
	el: '#app',
	data: {
		tasks:[
			{body: 'Go to store', completed: false},
			{body: 'Make phone call', completed: false},
			{body: 'Do other stuff', completed: true}
		]

	}

})