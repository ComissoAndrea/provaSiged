<script setup lang="ts">
import { TimelinePost , Post} from '../posts';
import { onMounted, ref,/* watch*/ } from 'vue'
//import { marked } from 'marked'
//import highlightjs from 'highlight.js'
//import debounce from "lodash/debounce"
import { NButton } from 'naive-ui'
import { useUsers } from '../stores/user';

const props = defineProps<{
    post: TimelinePost | Post
}>()


const emit=defineEmits<{
  (event:"submit", post:Post):void
}>()


const title = ref(props.post.title)
const content = ref(props.post.markdown)
const html = ref('')
const contentEditable = ref<HTMLDivElement>()

const usersStore=useUsers()


/*
watchEffect(()=>{
 marked.parse(content.value,(err,parseResult)=>{
  html.value=parseResult
 })
})*/

async function handleClick() {
  if(!usersStore.currentUserId){
      throw Error('user was not found') 
  }
  const newPost: Post = {
    ...props.post,
    created: typeof props.post.created ==='string' ? props.post.created:props.post.created.toISO(),
    title: title.value,
    authorId:usersStore.currentUserId,
    markdown: content.value,
    html: html.value
  }
  emit("submit",newPost)
}

/*
function parseHtml(markdown: string) {
    marked.parse(markdown, {
        gfm: true,
        breaks: true,
        highlight: (code) => {
            return highlightjs.highlightAuto(code).value
        }

    }, (err, parseResult) => {
        console.log(err)
        html.value = parseResult
    })
}


watch(content, debounce((newContent) => {
    parseHtml(newContent)
}, 100), {
    immediate: true
})
*/
function handleInput() {
    if (!contentEditable.value) {
        throw Error('contentEditable DOM node was not found')
    }
    content.value = contentEditable.value.innerText
}

onMounted(() => {
    if (!contentEditable.value) {
        throw Error("il contenuto non è disponibile")
    }
    contentEditable.value.innerText = content.value
})
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post title</div>
          <input type="text" class="input" v-model=title>
      </div>
    </div>
  </div>

    <div class="columns">
        <div class="column">
            <div contenteditable ref="contentEditable" @input="handleInput" />
        </div>
        <div class="column">
            <div v-html="html" />
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <n-button @click="handleClick">Salva Post</n-button>
        </div>
        <div class="column">
        </div>
    </div>
</template>