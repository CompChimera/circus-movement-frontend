import HomePage from './views/HomePage.vue'

export const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: '/move',
        component:  () => import("@/views/MovePage.vue")
    },
    {
        path: "/move/:id",
        component: () => import("@/views/MoveSinglePage.vue"),
        name: "singlemove"
    },
    {
        path: '/apparatus',
        component: () => import("@/views/ApparatusPage.vue")
    },
    {
        path: "/apparatus/:id",
        component: () => import("@/views/ApparatusSinglePage.vue"),
        name: "singleapparatus"
    },
    {
        path: '/routine',
        component: () => import("@/views/RoutinePage.vue")
    },

];
