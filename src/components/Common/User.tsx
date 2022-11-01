import {FC} from 'react'



const User : FC = () => {
     return(
         <div className='flex gap-3 mt-2 align-center'>
             <img src="/Images/user.svg"  alt="user" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                 <h2> Idris Abdulhakeem </h2>
                 <p className='text-sm'> idrisabdulhakeem08@gmail.com</p>
              </div>
         </div>
     )
}


export default User