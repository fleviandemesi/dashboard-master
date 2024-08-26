import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckSession = ()=>{

    const navigate = useNavigate()
    // check from local storage if the following variables are available 
     
     
  const name = localStorage.getItem("name")
  const shoe_id = localStorage.getItem("shoe_id")
  const access_token = localStorage.getItem("access_token")
//   if they are not CgPresentation, redirect user to signin 
useEffect(()=>{
    // check if they are empty 
    if(!name && !shoe_id && ! access_token){
        // clear the local stroge 
        localStorage.clear()
        return navigate("/signin")//go to signin

    }

},[name,shoe_id,access_token,navigate])
// return your variables 
return{name,shoe_id,access_token}


}
export default CheckSession