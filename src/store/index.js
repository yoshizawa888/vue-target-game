import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
	state: {
		score: 0,
		name: '',
		results: [],
	},
	getters: {
		score: (state) => state.score,
		name: (state) => state.name,
		results: (state) => state.results,
	},
	mutations: {
		updateScore(state) {
			state.score++;
		},
		playerName(state, name) {
			state.name = name;
		},
		resultGet(state, result) {
			state.results = result;
		},
		ranking(state) {
			state.results.sort((a, b) => {
				let first = Number(a.fields.score.integerValue);
				let second = Number(b.fields.score.integerValue);
				if (first < second) {
					return 1;
				} else {
					return -1;
				}
			});
			this.commit('rankingTopN', 5);
		},
		rankingTopN(state, n) {
			state.results = state.results.slice(0, n);
		},
		reset(state) {
			state.name = '';
			state.score = 0;
		},
	},
	actions: {
		statusPost() {
			axios.post('https://firestore.googleapis.com/v1/projects/target-game-45c90/databases/(default)/documents/results', {
				fields: {
					name: { stringValue: this.getters.name },
					score: { integerValue: this.getters.score },
				},
			});
		},
		async resultList({ commit }) {
			await axios.get('https://firestore.googleapis.com/v1/projects/target-game-45c90/databases/(default)/documents/results').then((response) => {
				commit('resultGet', response.data.documents);
			});
		},
	},
	plugins: [
		createPersistedState({
			key: 'resultData',
			storage: window.sessionStorage,
		}),
	],
});
