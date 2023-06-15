import {mount} from '@vue/test-utils'
import { describe,expect,it} from 'vitest'
import FormInput from './FormInput.vue'
import { defineComponent, ref, computed } from 'vue'

describe("FormInput",()=>{
  it.skip("test validation",async()=>{
    const Parent=defineComponent({
      components:{FormInput},
      template:`<FormInput
        name='foo'
        type='input',
        :status='status'
        v-model='formValue'/>`,
        setup() {
          const formValue=ref('foo')
          const status=computed(()=>{
            if(formValue.value.length>5){
              return {
                valid:true
              }
            }else{
              return{
                valid:false,
                message:'error'
              }
            }
          })
          return {
            formValue,
            status
          }
        },
    })
    const wrapper=mount(Parent)

    expect(wrapper.find('.is-danger').text()).toBe('error')

    await wrapper.find('input').setValue('foobar')

    expect(wrapper.find('is-danger').exists()).toBe(false)

    console.log(wrapper.html())
  })


  it("renders some errors",()=>{
    const wrapper=mount(FormInput,{
      props:{
        name:'foo',
        modelValue:'bar',
        status:{
          valid:false,
          message:'error'
        },
        type:'input',
      }
      
    })

    console.log(wrapper.html())

    expect(wrapper.find('.is-danger').exists()).toBe(true)
  })
  
  it("renders no errors",()=>{
    const wrapper=mount(FormInput,{
      props:{
        name:'foo',
        modelValue:'bar',
        status:{
          valid:true,
          message:'erro'

        },
        type:'input',
      }
      
    })

    console.log(wrapper.html())

    expect(wrapper.find('.is-danger').exists()).toBe(false)
  })
})