<template>
	<div class="counter">
		<h2>The count is {{ count }}</h2>

		<p>
			<button @click="count += 1">Counter</button>
		</p>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				count: 0
			}
		}
		
	}
</script>

<style>

.counter{
	margin-top: 30px;
	background: #FFC3C3;
	padding: 30px;
	border: solid 1px #CD5D5D;
}
	
</style>