import { ErrorInRequest, FtechUserRequested, Success } from "./Action"
import axios from 'axios'
import { Dispatch } from "redux";

export const ApiMiddlware = ()=>{
    return async (dispatch:Dispatch)=>{
            dispatch(FtechUserRequested());
            
            axios.get("https://jsonplaceholder.typicode.com/users").then((responce)=>{
                    dispatch(Success(responce))
            }).catch((error)=>{
                dispatch(ErrorInRequest(error.message))
            })
    }
}
