import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckSession = ()=>{

    const navigate = useNavigate()
    // check from local storage if the following variables are available 
     
     
  const admin_id = localStorage.getItem("admin_id")
  const username = localStorage.getItem("username")
  const access_token = localStorage.getItem("access_token")
//   if they are not CgPresentation, redirect user to signin 
useEffect(()=>{
    // check if they are empty 
    if(!admin_id && !username && ! access_token){
        // clear the local stroge 
        localStorage.clear()
        return navigate("/signin")//go to signin

    }

},[admin_id,username,access_token,navigate])
// return your variables 
return{admin_id,username,access_token}


}
export default CheckSession