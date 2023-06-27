import { defineStore } from 'pinia'
import { type Client  } from '../clienti'
import { DateTime } from 'luxon'
import { type Period } from '../constants'


interface ClientsState{
  ids:string[] //['1','2','3']
  all: Map<string,Client>
  selectedPeriod:Period
}

function delay(){
    return new Promise<void>(res=> setTimeout(res, 500))
}


export const useClient= defineStore("clients",{
    state: (): ClientsState=>({
        ids:[],
        all: new Map(),
        selectedPeriod:"Today"
    }),

    actions:{
        
        setSelectedPeriod(period:Period){
            this.selectedPeriod=period
        },
        
        async fetchClient(){
         const res=await window.fetch("/api/clients") 
         const data=(await res.json()) as Client[]  
         await delay()
         
         const ids: string[]=[]
         const all= new Map<string,Client>()
         for (const client of data) {
            ids.push(client.id)
            all.set(client.id,client)
         } 

         
         this.ids=ids
         this.all=all
        },
        createClient(client:Client){
            const body=JSON.stringify(client) 
            return  window.fetch("/api/clients",{
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body
            })
        },
        updatePost(client:Client){
            const body=JSON.stringify(client) 
            return  window.fetch("/api/clients",{
             method:"PUT",
             headers:{
                "Content-Type":"application/json"
             },
             body
            })
        }
    },
    getters:{
        filterClients:(state):Client[]=>{
                return state.ids
                .map(id=>{
                const client =state.all.get(id)
            
                if(!client){
                    throw Error('il post che stai cercando con id: ${id} non è stato trovato.')
                }
                return {
                ...client,
                created: DateTime.fromISO(client.date!)//il ! rimuove i null o gli undefined
                
                }
                })
                .filter(client=>{
                if(state.selectedPeriod==="Today"){
                    return client.created>=DateTime.now().minus({day:1})
                }
                if(state.selectedPeriod==="This Week"){
                    return client.created>=DateTime.now().minus({day:7})
                }
                if(state.selectedPeriod==="This Month"){
                    return client.created>=DateTime.now().minus({day:30})
                }
                if(state.selectedPeriod==="This Year"){
                    return client.created>=DateTime.now().minus({day:365})
                }
                return client
                })
            
            }
    }
})