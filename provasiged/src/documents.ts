export interface Document{
    id:string
    name:string
    destinatario:string
    oggetto:string
    stato:string
}

export interface TimeLineDoc extends Omit<Document,"stato">{
    stato:string

}

export const doc1:Document={
    id:"1",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"
}

export const doc2:Document={
    id:"2",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"
}


export function get(id:number){
    return documenti[id]
}


export const documenti:Document[]=[
    {id:"1",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"2",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"3",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"4",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"5",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"6",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
    {id:"7",name:"pippo",destinatario:"pippo",oggetto:"pippo",stato:"pippo"},
]