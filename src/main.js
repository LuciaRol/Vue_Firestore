import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import Home from "./components/home.vue"
import Privado from './components/privado.vue'
import {createRouter, createWebHistory} from 'vue-router'




const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

/* definir rutas */
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Privado },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  console.log("hola")
  return true
})



app.use(router)
app.mount('#app')
