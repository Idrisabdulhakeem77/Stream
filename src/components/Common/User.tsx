import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'



const User : FC = () => {
     const currentUser = useAppSelector(state => state.user.user)
     return(
         <div className='flex gap-3 mt-2 align-center'>
             <img src={ currentUser ?  (currentUser.photoURL as string ): "/Images/user.svg"}  alt="user" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                 <h2 className='font-light'> { currentUser ? currentUser.displayName : "Unknown "} </h2>
                 <p className='text-sm'> { currentUser ? currentUser.email : "unknown@gmail.com"}</p>
              </div>
         </div>
     )
}


export default User