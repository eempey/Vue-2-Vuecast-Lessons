
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/*require('./bootstrap');

window.Vue = require('vue');

*
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
*/

import Vue from 'vue';

import axios from 'axios';

import Form from './core/Form';

import Example from './components/Example';

import ExampleComponent from './components/ExampleComponent.vue';


window.axios = axios;

window.Form = Form;

var formObject = new Vue({
	el: "#app",

	components: {
		Example
	},

	data: {
		form: new Form({
			name: "",
			description: ""
		})
	},

	methods: {
		onSubmit(){
			this.form.submit('post', '/projects')
			.then(data => console.log(data));
		}
	}
});

var exampleVue = new Vue({
	el: "#app",

	components: { 'example-component' : ExampleComponent }
});

let store = {
	user: {
		name: 'John Doe'
	}
};


new Vue({
	el: '#one',

	data: {
		shared: store
	}

});

new Vue({
	el: '#two',

	data: {
		shared: store
	}

});

Vue.component('coupon', {
	props: ['value'],

	template: `
		<input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
	`,

	methods: {
		updateCode(code){

			if(code === 'ALLFREE'){
				alert('This coupon is no longer valid. Sorry');

				this.$refs.input.value =  code = '';


			}
			this.$emit('input', code);
		}
	}
});

new Vue({
	el: '#custom-input',

	data: {
		coupon: 'FREEBIE'
	}
})