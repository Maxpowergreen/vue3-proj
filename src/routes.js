import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import homePage from './pages/theHome';
import aboutPage from './pages/theAbout';
import noteFoundPage from './pages/notFound.vue';


const routers = createRouter ({
    history: routerHistory,
    routes: [
    {
        path: '/',
        name: 'homePage',
        component: homePage,
    },
    {
        path: '/about',
        name: 'aboutPage',
        component: aboutPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'notFound',
        component: noteFoundPage,
    },

    ],
});

export default routers;