import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		nombre: 'Roy',
		apellidos: 'Fokker',
		profesion: 'pilot',
		ciudad: 'Macross'
	}
});
