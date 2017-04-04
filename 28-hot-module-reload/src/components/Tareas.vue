<template>
	<div>
		<h2>Tasks to do</h2>
		<ul>
			<li v-for="tarea in tareasPendientes">
				<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
			</li>
		</ul>
		<h2>Completed Tasks</h2>
		<li v-for="tarea in tareasFinalizadas">
			<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
		</li>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				tareas: [
					{nombre: 'Task 1', completado: false},
					{nombre: 'Task 2', completado: false},
					{nombre: 'Task 3', completado: false},
					{nombre: 'Task 4', completado: false},
					{nombre: 'Task 5', completado: false},
					{nombre: 'Task 6', completado: false},
					{nombre: 'Task 7', completado: false},
					{nombre: 'Eat my biscuits', completado: false},
				],
				finalizadas: []
			}
		},
		methods: {
			actualizarTarea(tarea) {
				tarea.completado = !tarea.completado;
			}
		},
		computed: {
			tareasPendientes() {
				return this.tareas.filter((tarea) => !tarea.completado);
			},
			tareasFinalizadas() {
				return this.tareas.filter((tarea) => tarea.completado);
			}
		}
	}
</script>
<style>
	li a {
		color: red;
		font-family: arial;
		font-weight: bold;
		text-decoration: none;
	}
</style>