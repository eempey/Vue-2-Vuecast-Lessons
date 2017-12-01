if(document.getElementById('root')){
	var welcomepage = new Vue({
	el: "#root",

	data: {
		skills: []
	},

	mounted(){
		axios.get('skills').then(response => this.skills = response.data);
	}
});
}


class Errors {
	constructor(){
		this.errors = {};
	}

	get(field){
		if(this.errors[field]){
			return this.errors[field][0];
		}
	}

	has(field){
		return this.errors.hasOwnProperty(field);
	}

	any(){
		return Object.keys(this.errors).length > 0;
	}

	record(errors){
		this.errors = errors;
	}

	clear(field){
		delete this.errors[field];
	}
}

var formObject = new Vue({
	el: "#app",

	data: {
		name: "",
		description: "",
		errors: new Errors()
	},

	methods: {
		onSubmit(){
			axios.post('/vue/vue-app/public/projects', this.$data)
			.then(this.onSuccess)
			.catch(error => this.errors.record(error.response.data.errors));
		},

		onSuccess(response){
			alert(response.data.message);

			this.name = "";
			this.description = "";
		}
	}
});

