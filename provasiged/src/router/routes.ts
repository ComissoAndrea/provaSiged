import { createRouter , createWebHistory } from'vue-router'
import Home from '../components/HomePage.vue'

import DocumentDetail from '@/components/DocumentDetail.vue'
import DocumentView from '../components/DocumentHome/DocumentView.vue'
import DocumentDetailId from '@/components/DocumentDetailId.vue'
export const routes=[
    {
        
        name:"/",
        path:"/",
        component:Home
    },
    {
        name:"document_list",
        path:"/document_list",
        component:DocumentView,  
    },
    {
        name:"document_detail",
        path:'/document_detail',
        component:DocumentDetail
    },
    {
        name:"document_detail_id",
        path:'/document_detail_id/:id',
        component:DocumentDetailId
    },

]


export const router=createRouter({
    history:createWebHistory(),
    routes,
})

