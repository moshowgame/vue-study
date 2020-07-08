<template>
	<button @click="display">自定义按钮</button>
</template>

<style scoped>
	button{
		width: 100px;
		height: 30px;
		background-color:#ccc;
		color:rgb(235, 97, 97);
	}
</style>
<script>
export default {
	methods: {
		display:function(event){
			alert("你点击了按钮");
		}
	}
}
</script>