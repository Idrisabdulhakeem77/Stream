import {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'


// ADD REACT TOASTIFY LIBRARY

const MiniSidebar : FunctionComponent = () => {
     return (
          <div>
            <Link to='/'>
                 <BsFillEyeFill size={25}/>
             </Link>
              <div>
                 <Link to="/">  <AiOutlineHome size={25} />   </Link>
                 <Link to="explore"> <MdOutlineExplore size={25} /></Link>
              </div>
          </div>
     )
}


export default MiniSidebar
