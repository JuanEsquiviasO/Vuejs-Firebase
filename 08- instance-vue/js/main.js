const vm1 = new Vue({
	el: 'main',
	data: {
		message: 'Instance Vue 1'
	},
	beforeUpdate() {
		console.log('BeforeUpdate: ', this.message);
	},
	updated() {
		console.log('Update: ', this.message);
	},
	methods: {
		alReves(){
			this.message = this.message.split('').reverse().join('');
			// vm2.message = 'Hi, this is instance 1';
		}
	},
	computed: {
		mensajeMayuscula(){
			return this.message.toUpperCase();
		}
	}
});

const vm2 = new Vue({
	el: '#app',
	data: {
		message: 'Instance Vue 2'
	}
});