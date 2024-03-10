import MovePage from './views/MovePage.vue'
import HomePage from './views/HomePage.vue'
import ApparatusPage from './views/ApparatusPage.vue'
export const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: '/move',
        component: MovePage
    },
    {
        path: '/apparatus',
        component: ApparatusPage
    }
];
