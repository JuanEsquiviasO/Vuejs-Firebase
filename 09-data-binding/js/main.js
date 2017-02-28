new Vue({
	el: 'main',
	data: {
		tareas: [
			{title: 'Buy milk', completado: false},
			{title: 'Learn Vue.js', completado: false},
			{title: 'Learn Firebase', completado: false},
			{title: 'Learn ES6', completado: false},
			{title: 'Play soccer', completado: false},
		]
	},
	methods: {
		completarTarea(tarea) {
			tarea.completado = !tarea.completado;
		}		
	},
	computed: {
		tareasCompletadas() {
			return this.tareas.filter((tarea) => tarea.completado);
		}
	}
});
