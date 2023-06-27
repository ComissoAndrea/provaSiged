import { DateTime} from 'luxon'

export interface Client{
    id: string
    name:string
    surname:string
    date:string | null
    object: string
    state:string
}



export const Luigi:Client={
    id: "1",
    name:"Luigi",
    surname:"Gigio",
    date:DateTime.now().toISO(),
    object: "Oggetto del documento",
    state:"In lavoro",  
}

export const Pino:Client={
    id: "2",
    name:"Pino",
    surname:"Abete",
    date:DateTime.now().toISO(),
    object: "Oggetto del documento",
    state:"Al bar",
}

export const Carlo:Client={
    id: "3",
    name:"Carlo",
    surname:"Carletto",
    date:DateTime.now().toISO(),
    object: "Oggetto del documento",
    state:"In approvazione",
}