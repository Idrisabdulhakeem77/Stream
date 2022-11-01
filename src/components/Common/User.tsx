import {FC} from 'react'



const User : FC = () => {
     return(
         <div className='flex'>
             <img src="/Images/user.svg"  alt="user" className="w-8 h-8 rounded-full"/>
              <div>
                 <h2> Idris Abdulhakeem </h2>
                 <p> idrisabdulhakeem08@gmail.com</p>
              </div>
         </div>
     )
}


export default User