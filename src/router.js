import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/StartPage';
import Game from './views/GameScreen';
import Result from './views/ResultList';

const routes = [
	{
		path: '/',
		name: 'start',
		component: Start,
	},
	{
		path: '/game',
		name: 'game',
		component: Game,
	},
	{
		path: '/result',
		name: 'result',
		component: Result,
	},
];

const router = createRouter({
	history: createWebHistory('/vue-target-game/'),
	routes,
});

export default router;
