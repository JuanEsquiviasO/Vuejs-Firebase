new Vue({
	el: 'main',
	data: {
		message: 'Hi world!!',
		newTarea: null,
		tareas: [{
				title: 'Drive a car',
				priority: true,
				antiquity: 23
			},
			{
				title: 'Learn cook',
				priority: false,
				antiquity: 13
			},
			{
				title: 'Play the guitar',
				priority: false,
				antiquity: 23
			}
		]
	},
	methods: {
		addTarea() {
			//this rerence instance
			this.tareas.unshift({
				title: this.newTarea,
				priority: false,
				antiquity: 0,
			});
			this.newTarea = null;
		}
	},
	computed: {
		messageAlReves() {
			return this.message.split('').reverse().join('');
		},
		tareasConPrioridad(){
			return this.tareas.filter((tarea) => tarea.priority);
		},
		tareasConAntiguedad(){
			return this.tareas.sort((a, b) => b.antiquity - a.antiquity);
		}
	}
});