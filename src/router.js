import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Register from './components/Register'
import Login from './components/Login'
import AboutPost from './components/AboutPost'

Vue.use(VueRouter)


export const routes=[
    {path:"/", component:Posts},
    {path:'/add', component:AddPost},
    {path:"/register", component:Register},
    {path:'/login', component:Login},
    {path:"/post/:id", component:AboutPost}
]


export const router= new VueRouter({
    routes,
    mode:"history"
})