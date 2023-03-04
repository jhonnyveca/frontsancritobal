import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import DataTable from 'primevue/datatable';
import Toolbar from 'primevue/toolbar';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp(App);
app.use(PrimeVue);
app.use(VueSweetalert2);
app.component('DataTable', DataTable);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column);
app.component('InputText', InputText);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Toolbar', Toolbar);
app.use(router).mount('#app');
