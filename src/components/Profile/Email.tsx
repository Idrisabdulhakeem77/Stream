import { useAppSelector } from "../../store/hooks"
import {ToastContainer , toast} from "react-toastify"
import { BiSend } from "react-icons/bi"
import { AiOutlineEdit } from "react-icons/ai"


interface EmailProps {
     isUpdatingEmail : boolean 
     setIsUpdatingEmail : any 
     emailValueRef : any
     isShowPromptReAuthFor : any
}


const Email = ( {isUpdatingEmail , setIsUpdatingEmail , emailValueRef , isShowPromptReAuthFor } : EmailProps ) => 
      
{
   
     const user = useAppSelector(state => state.user.user)
     
    return (
          <>
            <ToastContainer/>
              
                  <p className="text-lg">Email </p>  
               {!isUpdatingEmail && (
                  <div className="flex justify-between mt-2">
                    <p> { user?.email }</p>
                    <button
                     className="hover:text-primary transition duration-300"
                     onClick={() => setIsUpdatingEmail(true)}
                    >
                    <AiOutlineEdit size={25}/>
                    </button>
                  </div> 
              )}


              { isUpdatingEmail && (
                  <>
                     <form>
                        <
                     </form>
                   </>
              )}
             
           </>
    )
}

export default Email