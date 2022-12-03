import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'



const User : FC = () => {
     const currentUser = useAppSelector(state => state.user.user)
     return(
         <div className='flex gap-3 mt-2 align-center items-center '>
             <img src={ currentUser ?  (currentUser.photoURL as string ): "/Images/user.svg"}  alt="user" className="w-10 h-10 rounded-full object-cover"/>
             <h2 className='font-light text-lg'> { currentUser ? currentUser.displayName : "Unknown "} </h2>
         </div>
     )
}


export default User