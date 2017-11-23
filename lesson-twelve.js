Vue.component('coupon',{
	template: `
		<input type="text" placeholder="Enter here" @blur="onCouponApplied">
	`,

	methods: {
		onCouponApplied(){
			this.$emit('applied', this.coupon)
		}
	}
});

new Vue({
	el: "#root",

	data: {
		couponApplied: false
	},

	methods: {
		onCouponApplied(){
			alert('It was applied!');
			this.couponApplied = true;
		}
	}
});