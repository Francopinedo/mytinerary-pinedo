import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_ing",async (payload)=>{
    try {
        let {email,password} = payload

const user = await axios
.post("http://localhost:3000/api/user/login",{
    email: email,
    password:password,
})
.then((response)=>{
    localStorage.setItem("token",response.data.token)
    return response.data.user
})
return{
    user:user,
}
    } catch (error) {
        
    }
})

const authenticate = createAsyncThunk("authenticate",async()=>{
try {
    let token = localStorage.getItem("token")
    console.log(token)
    let user = await axios.post("http://localhost:5173/api/user/authenticated",null,
    {
        headers:{
            'Authorization': 'Bearer '+token
        }
    })
    .then((response)=>{
        console.log("authenticated successfully")
        localStorage.setItem("token",response.data.token)
        return response.data.user
    })
    return {
        user:user
    }
} catch (error) {
    
}

})

const sign_out= createAsyncThunk("sign_out",async ()=>{
    try {
       axios.post("http://localhost:5173/api/user/sign_out") 
       .then((response)=> console.log(response))
    } catch (error) {
        console.log(error.message)
    }
})

const userActions = {sign_in,authenticate,sign_out}
export default userActions