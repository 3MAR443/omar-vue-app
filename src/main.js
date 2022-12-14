import 'mdb-vue-ui-kit/css/mdb.min.css'
import 'mdb-vue-ui-kit'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
