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

if(document.getElementById('app')){
	var formObject = new Vue({
		el: "#app",

		data: {
			name: "",
			description: ""
		}
	});
}
