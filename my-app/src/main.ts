import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router} from './routes'
import { useUsers } from './stores/user'
import { usePosts } from './stores/posts'



const app=createApp(App)
app.use(createPinia())

const usersStore=useUsers()
const postsStore=usePosts()

Promise.all([
    usersStore.authenticate(),
    postsStore.fetchPost()
]).then(()=>{
    app.use(router)
    app.mount("#app")
})

