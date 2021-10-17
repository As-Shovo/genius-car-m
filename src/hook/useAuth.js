import { useContext } from "react"
import { AuthContext } from "../contaxts/AuthProvider"

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth ;