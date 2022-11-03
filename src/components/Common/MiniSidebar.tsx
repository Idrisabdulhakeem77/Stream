import {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'
import {links} from './data'



// ADD REACT TOASTIFY LIBRARY

const MiniSidebar : FunctionComponent = () => {
     return (
          <div>
            <Link to='/'>
                 <BsFillEyeFill size={25}/>
             </Link>
              <div>
                 { ( links as []).map(( link , index) => {
                     const { url , icon } = link 
                      return (
                         <Link to={url}> {icon}</Link>
                      )
                 })}
                  
              </div>
          </div>
     )
}


export default MiniSidebar
