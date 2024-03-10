import HomePage from './views/HomePage.vue'
import MovePage from './views/MovePage.vue'
import ApparatusPage from './views/ApparatusPage.vue'
import RoutinePage from './views/RoutinePage.vue'
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
    },
    {
        path: '/routine',
        component: RoutinePage
    }
];
