<template>
	<div>
		<h1>Main menu</h1>
		<input type="range">
		<ul>
			<li><a href="">Link 1</a></li>
			<li><a href="">Link 2</a></li>
			<li><a href="">Link 3</a></li>
			<li><a href="">Link 4</a></li>
			<li><a href="">Link 5</a></li>
			<li><a href="">Link 6</a></li>
		</ul>
		<tareas></tareas>
	</div>
</template>

<script>
	import Tareas from './components/Tareas.vue';
	export default {
		components: {Tareas},
	}
</script>

