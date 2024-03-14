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
        component: () => import("@/views/MoveDetailPage.vue"),
        name: "movedetail"
    },
    {
        path: '/apparatus',
        component: () => import("@/views/ApparatusPage.vue")
    },
    {
        path: "/apparatus/:id",
        component: () => import("@/views/ApparatusDetailPage.vue"),
        name: "apparatusdetail"
    },
    {
        path: '/routine',
        component: () => import("@/views/RoutinePage.vue")
    },

];
