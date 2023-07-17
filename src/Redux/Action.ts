import { ERROR, FTECH_USER_REQUEST, SUCCESS } from "./ActionType";

type FuntionTypes ={
    type:String,
    payload: [] | String
}
type FuntionFtechUser ={
    type:String,
    payload?:Boolean 
}


export function FtechUserRequested():FuntionFtechUser{
    return {
        type:FTECH_USER_REQUEST
        

    }
}
export function Success(user:any):FuntionTypes{
    return {
        type:SUCCESS,
        payload:user

    }
}
export function ErrorInRequest(error:string):FuntionTypes{
    return {
        type:ERROR,
        payload:error

    }
}