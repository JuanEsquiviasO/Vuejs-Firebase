<template>
	<h1>Hi my name is {{ nombre }} {{ apellidos }} and I am {{ profesion }}</h1>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		// computed: {
		// 	nombre() {
		// 		return this.$store.state.nombre;
		// 	}
		// }
		// computed: mapState({
		// 	nombre: (state) => state.nombre,
		// 	apellidos: (state) => state.apellidos,
		// 	profesion: (state) => state.profesion,
		// 	ciudad: (state) => state.ciudad
		// })
		computed: mapState(['nombre', 'apellidos', 'profesion']),
	}
</script>

