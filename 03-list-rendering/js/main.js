const vm = new Vue({
	el: 'main',
	data: {
		// name: 'Fokker',
		friends: ['Hunter', 'Dixon', 'Sterling', 'Farina', 'Bernard'],
		tareas: [
			{name: 'Go to hangar', priority: 'normal'},
			{name: 'Test army', priority: 'hight'},
			{name: 'Training', priority: 'normal'},
		],
		person: {
			name: 'Max',
			profession: 'pilot',
			city: 'Macross'
		}
	},
});