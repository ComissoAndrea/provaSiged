import express,  {Request,Response} from "express";
import cors from'cors'
import bodyParser from "body-parser";
import { today, thisWeek,thisMonth,thisYear,Post } from "../posts";
import { NewUser,User } from "../user";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken"; 


const app=express()
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

const allPosts=[today,thisWeek,thisMonth,thisYear]
const allUser:User[]=[]

app.get("/posts",(_req,res)=>{
    res.json(allPosts)
})

const SECRET='my-secret'
const COOKIE='vuejs-jwt'

function authenticate (id:string, req:Request, res:Response){
    console.log(req)
    const token=jsonwebtoken.sign({id} ,SECRET,{
        issuer:'vuejs-course',
        expiresIn:'30 days'
    })
    res.cookie(COOKIE,token,{httpOnly:true})
}


app.get("/current-user",(req,res)=>{
    console.log(req)
    try{
        const token=req.cookies[COOKIE]
        const result =jsonwebtoken.verify(token,SECRET) as {id:string }
        res.json({id:result.id})
    }catch(e){res.status(404).end()}
})

app.post<{},{},Post>("/posts",(req,res)=>{
    const post ={...req.body,id: (Math.random()*100000).toFixed()}
    allPosts.push(post)
    res.json(post)
})

app.post("/logout",(req,res)=>{
    console.log(req)
    res.cookie(COOKIE,"",{httpOnly:true})
    res.status(200).end()
})

app.post<{},{},NewUser>("/login",(req,res)=>{
    const targetUser=allUser.find(x=>x.username==req.body.username)
    if(!targetUser || targetUser.password!==req.body.password){
        res.status(401).end()
    }else{
        authenticate(targetUser.id,req,res)
        res.status(200).end()
    }
})

app.post<{},{},NewUser>("/users",(req,res)=>{
    const user:User={...req.body,id: (Math.random()*100000).toFixed()}
    allUser.push(user)
    authenticate(user.id,req,res)
    const {password, ...rest}=user
    res.json(rest)
})

app.put<{},{},Post>("/posts",(req,res)=>{
  const index =allPosts.findIndex(x=>x.id===req.body.id)

  if(index===-1){
    throw Error(`Post with id ${req.body.id} was not found`)
  }
  const existingPost=allPosts[index]
  allPosts[index] ={...existingPost,...req.body}
  res.json(allPosts[index])
})

app.listen(8000,()=>{
    console.log('listen on post 8000')
})