import express,  {type Request,type Response} from "express";
import cors from'cors'
import bodyParser from "body-parser";
import {doc1,doc2} from './documents'




const app=express()
app.use(cors())
app.use(bodyParser.json())

console.log("prova")
const allDoc=[doc1,doc2]

app.get("/docs",( req:Request, res:Response)=>{
  
  console.log("prova")
    res.json(allDoc)
})


app.post<{},{},Document>("/docs",( req:Request, res:Response)=>{
  console.log("prova")
    const doc ={...req.body,id: (Math.random()*100000).toFixed()}
    allDoc.push(doc)
    res.json(doc)
})


app.put<{},{},Document>("/docs",( req:Request, res:Response)=>{
  const index =allDoc.findIndex(x=>x.id===req.body.id)

  if(index===-1){
    throw Error(`Doc with id ${req.body.id} was not found`)
  }
  const existingDoc=allDoc[index]
  allDoc[index] ={...existingDoc,...req.body}
  res.json(allDoc[index])
})

app.listen(8000,()=>{
    console.log('listen on post 8000')
})