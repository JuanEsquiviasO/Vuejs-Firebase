const vm = new Vue({
	el: 'main',
	data: {
		newTarea: null,
		tareas: [
			'Test Vue.js',
			'Learn ES6',
			'Deploy project'
		]
	},
	methods: {
		addTarea() {
			//this rerence instance
			this.tareas.unshift(this.newTarea);
			this.newTarea=  null;
		}
	}
});

// Vanilla JavaScript 
// function addTarea() {
// 	const input = document.querySelector('input[type=text]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }