Vue.component('lista-tareas', {
	props: ['tareas'],
	template: `<div>
							<h1><slot></slot></h1>
							<ul>
								<tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
							</ul>
					</div>`,
});

Vue.component('tarea', {
	props: ['tarea'],
	template: `<li>  {{ tarea }} </li>`
});

new Vue({
	el: 'main',
	data: {
		tareas: [
			'task Lorem ipsum 1',
			'task Lorem ipsum 2',
			'task Lorem ipsum 3',
			'task Lorem ipsum 4',
		]
	}
});