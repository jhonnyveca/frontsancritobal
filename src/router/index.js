import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Listar from '../components/ListarProductos.vue';
import Crear from '../components/CrearProductos.vue';
import Editar from '../components/EditarProductos.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/crear', name: 'Crear', component: Crear },
  { path: '/editar/:id', name: 'Editar', component: Editar },
  { path: '/listar', name: 'Listar', component: Listar },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
