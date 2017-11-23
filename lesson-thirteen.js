window.Event = new Vue();

Vue.component('coupon',{
	template: `
		<input type="text" placeholder="Enter here" @blur="onCouponApplied">
	`,

	data(){
		return {
			coupon: [1,2,3]
		}
	},

	methods: {
		onCouponApplied(){
			Event.$emit('applied', this.coupon);
		}
	}
});

new Vue({
	el: "#root",

	data: {
		couponApplied: false
	},

	created() {
		Event.$on('applied', (parameter) => {
			alert('Handling it!');  
			this.couponApplied = true;
			console.log(parameter);
		});
	}
});