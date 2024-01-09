import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import store from './store'
import Toast from 'vue3-toastify';

const app = createApp(App)

app.use(store);
app.use(Toast);
initializeRouter(app)

app.mount('#app')
