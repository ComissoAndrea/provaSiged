import { defineStore } from 'pinia'
import { Post , TimelinePost} from '../posts'
import{ Period} from '../constants'
import { DateTime } from 'luxon'

interface postsState{
  ids:string[] //['1','2','3']
  all: Map<string,Post>
  selectedPeriod:Period
}

function delay(){
    return new Promise<void>(res=> setTimeout(res, 500))
}


export const usePosts= defineStore("posts",{
    state: (): postsState=>({
        ids:[],
        all: new Map(),
        selectedPeriod:"Today"
    }),

    actions:{
        setSelectedPeriod(period:Period){
            this.selectedPeriod=period
        },
        
        async fetchPost(){
         const res=await window.fetch("/api/posts") 
         const data=(await res.json()) as Post[]  
         await delay()
         
         let ids: string[]=[]
         let all= new Map<string,Post>()
         for (const post of data) {
            ids.push(post.id)
            all.set(post.id,post)
         } 

         
         this.ids=ids
         this.all=all
        },
        createPost(post:Post){
            const body=JSON.stringify(post) 
            return  window.fetch("/api/posts",{
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body
            })
        },
        updatePost(post:Post){
            const body=JSON.stringify(post) 
            return  window.fetch("/api/posts",{
             method:"PUT",
             headers:{
                "Content-Type":"application/json"
             },
             body
            })
        }
    },
    getters:{
        filterPosts:(state):TimelinePost[]=>{
                return state.ids
                .map(id=>{
                const post =state.all.get(id)
            
                if(!post){
                    throw Error('il post che stai cercando con id: ${id} non è stato trovato.')
                }
                return {
                ...post,
                created: DateTime.fromISO(post.created)
                }
                })
                .filter(post=>{
                if(state.selectedPeriod==="Today"){
                    return post.created>=DateTime.now().minus({day:1})
                }
                if(state.selectedPeriod==="This Week"){
                    return post.created>=DateTime.now().minus({day:7})
                }
                if(state.selectedPeriod==="This Month"){
                    return post.created>=DateTime.now().minus({day:30})
                }
                if(state.selectedPeriod==="This Year"){
                    return post.created>=DateTime.now().minus({day:365})
                }
                return post
                })
            
            }
    }
})