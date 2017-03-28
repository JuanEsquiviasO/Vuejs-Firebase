Vue.component('candidato', {
	// props: ['nombre', 'correo', 'imagen'],
	props: {
		nombre: {
			type: [String, Array],
			required: true,
		},
		correoe: {
			type: String,
			default: 'max@bre.com',
		},
		imagen: String,
		location: {
			type: Object,
			default() {
				return {
					ciudad: 'New York',
				}
			}
		}
	},
	template: '#candidato-template',
});

new Vue({
	el: 'main',
	mounted() {
		this.obtenerCandidatos();
	},
	data: {
		candidatos: [],
	},
	methods: {
		obtenerCandidatos() {
			axios.get('https://randomuser.me/api/?results=100')
				.then((respuesta) => {
					this.candidatos = respuesta.data.results;
				});
		}
	}
});