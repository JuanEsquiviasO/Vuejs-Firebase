<template>
	<div>
		<elemento tipo="footer">Hi footer!</elemento>
		<elemento tipo="header">Hi header!</elemento>
		<elemento tipo="aside">Hi aside!</elemento>
		<elemento tipo="nav">Hi nav!</elemento>	
		<elemento tipo="main">Hi main!</elemento>	
	</div>
</template>

<script>
	import elemento from './components/Elemento.vue';
	export default {
		components: { elemento }
	}
</script>

<style>
</style>
