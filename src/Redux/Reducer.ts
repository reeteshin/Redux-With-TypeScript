import { ERROR, FTECH_USER_REQUEST, SUCCESS } from "./ActionType"

type InitialUserStateTypes={
    Loading:boolean ,
    User:any,
    Error:string
}
const InitialUserState:InitialUserStateTypes = {
    Loading:false,
    User:[],
    Error:""
}

export const Reducer = (state=InitialUserState, action:any)=>{
    switch(action.type){
        case FTECH_USER_REQUEST:return{
            ...state,Loading:true
        }
        case SUCCESS:return{
            ...state,Loading:false,
            User:action.payload,
            Error:""
        }
        case ERROR:return{
            ...state,Loading:false,
            User:[],
            Error:action.payload
        }
        default: return state 
        

    }
}