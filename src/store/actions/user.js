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

const userActions = {sign_in}
export default userActions