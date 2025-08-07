import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'
//createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')
app.component("GlobalComponent", GlobalComponent)
