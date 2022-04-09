import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '../views/LandingView.vue';
import DetailView from '../views/DetailView.vue';
import DataView from '../views/DataView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: LandingView
		},
		{
			path: "/detail/:id",
			name: "detail",
			component: DetailView
		},
		{
			path: "/data/:id",
			name: "data",
			component: DataView
		}
	]
});

export default router;
