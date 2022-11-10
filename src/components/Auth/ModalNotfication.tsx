import { FunctionComponent , useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


interface ModalNotificationProps {
    type : string ,
    setError ?: any ,
    message : string
} 

const TIMEOUT_AUTO_CLOSE_ERROR = 5
const TIMEOUT_AUTO_CLOSE_SUCCESS = 2


const ModalNotification : FunctionComponent<ModalNotificationProps> = (  { type , message , setError} ) => {
   const [timeLeft , setTimeLeft] = useState( type === "success" ? TIMEOUT_AUTO_CLOSE_SUCCESS : TIMEOUT_AUTO_CLOSE_ERROR)
   const navigate = useNavigate()
   const [searchParams] = useSearchParams()
     return ( 
         <div>
            
            </div>
     )
}

export default ModalNotification