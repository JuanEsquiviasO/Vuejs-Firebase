Vue.filter('alReves',(value) => value.split('').reverse().join(''));

new Vue({
	el: 'main',
	data: {
		search: '',
		minimum: 5,	
		games: [{
				title: 'Batlefield 1',
				genre: 'FPS',
				puntuation: 9
			},
			{
				title: 'Civilization VI',
				genre: 'Estrategy',
				puntuation: 10
			},
			{
				title: 'Resident Evil VII',
				genre: 'Horror',
				puntuation: 7
			},
		]
	},
	computed: {
		bestGames() {
			return this.games.filter((game) => game.puntuation >= this.minimum);
		},
		searchGame() {
			return this.games.filter((game) => game.title.includes(this.search));
		}
	}
});