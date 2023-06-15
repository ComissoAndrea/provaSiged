import {mount} from '@vue/test-utils'
import { beforeEach, describe,expect,it, vi} from 'vitest'
import Navbar from './Navbar.vue'
import { Pinia, createPinia ,setActivePinia} from 'pinia'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '../routes'
import { useUsers } from '../stores/user'


vi.stubGlobal('fetch',vi.fn(()=>{
    
}))



describe("Navbar",()=>{

    let router:Router
    let pinia:Pinia
    beforeEach(()=>{
        


        const el=document.createElement('div')
        el.id='modal'
        document.body.appendChild(el)
    
    
        
        pinia=createPinia()
        setActivePinia(pinia)
        router=createRouter({
          history:createWebHistory(),
          routes
        })
    
    })
  it("renders signin and signup  buttons when not authenticated ",()=>{
    
    const wrapper=mount(Navbar,{
      global:{
          plugins:[pinia,router]
      }
    })
    expect(wrapper.find('#sign-up').exists()).toBe(false)
    expect(wrapper.find('[data-testid="sign-in"]').exists()).toBe(true)
    console.log(wrapper.html())

  })


  it("renders new post and log-out when authenticated ",async ()=>{
    
    const users=useUsers()
    users.currentUserId="1"

    const wrapper=mount(Navbar,{
      global:{
          plugins:[pinia,router]
      }
    })

    expect(wrapper.find('a').text()).toBe('New Posts')
    expect(wrapper.find('button').text()).toBe('Log out')

    wrapper.find('#logout').trigger('click')

    expect(wrapper.find('#sign-up').exists()).toBe(false)
    expect(wrapper.find('[data-testid="sign-in"]').exists()).toBe(false)

    await wrapper.find('[data-testid="sign-in]').trigger('click')

    expect(document.body.querySelector("#signin-form")).toBeTruthy()

    console.log(document.body.outerHTML)

  })
})