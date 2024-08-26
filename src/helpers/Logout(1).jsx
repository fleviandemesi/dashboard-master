import { redirect, useNavigate } from "react-router-dom";

const ReactLogout = () =>{
    //logout fun
    const navigate = useNavigate()
    const logout = ()=>{
        // clear local storage 
        localStorage.clear()
        // redirect to loginpaga 
        navigate("/signin")
    }
    // export the logout function 
    return {logout}
}

export default ReactLogout