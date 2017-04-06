<template>
  <!--<h1 :class="[$style.rojo]">CSS Modules</h1>-->
  <h1 :class="{[$style.subrayado] : subrayado}">CSS Modules</h1>
</template>

<script>
	export default {
		data() {
			return {
				subrayado: false
			}
		}
	}
</script>

<style module>
	.subrayado {
		text-decoration: underline;
	}

	.rojo {
		color: red;
	}
</style>
