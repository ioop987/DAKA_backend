import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//外部函式庫 view-ui-plus
// import ViewUIPlus from 'view-ui-plus';
// import 'view-ui-plus/dist/styles/viewuiplus.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "@/assets/scss/_style.scss";
import "@/assets/scss/components/Modal.scss";



const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

