import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Carousel from 'primevue/carousel';
import Button from "primevue/button"
const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true
});

app.component("Carousel", Carousel);
app.component('Button', Button);

createApp(App).mount('#app')