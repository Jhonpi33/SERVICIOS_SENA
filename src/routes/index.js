import inicioView from "../views/inicioView.vue";
import EnfermeriaView from "../views/EnfermeriaView.vue";
import coordinacionView from "../views/coordinacionView.vue";
import cafeteriaView from "../views/cafeteriaView.vue";
import bienestarView from "../views/bienestarView.vue";
import bibliotecaView from "../views/bibliotecaView.vue";
import AcercaView from "../views/acercaView.vue";
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {path: '/', component:inicioView},
    {path: '/enfermeriaView', component: EnfermeriaView},
    {path: '/coordinacionView', component: coordinacionView},
    {path: '/cafeteriaView', component: cafeteriaView},
    {path: '/bienestarView', component: bienestarView},
    {path: '/bibliotecaView', component: bibliotecaView},
    {path: '/acercaView', component: AcercaView}
]


export const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router