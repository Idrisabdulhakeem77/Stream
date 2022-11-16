import { FC , useState } from "react";
import Sidebar from '../components/Common/Sidebar'
import  {useCurrentViewPort} from '../components/hooks/useCurrentViewPort'
import {Link} from 'react-router-dom'
import {FaBars} from  'react-icons/fa'
import MiniSidebar from "../components/Common/MiniSidebar"

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const {isMobile} = useCurrentViewPort()
  const [isSidebarActive , setIsSidebarActive] = useState(false)
  return ( 
     <>
     
     <div className="flex justify-between items-center my-4 px-4 md:hidden">
        <Link to="/">
          <div className="uppercase font-medium text-lg tracking-widest">
            {" "}
            AnimeStream{" "}
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prevState) => !prevState)}>
          <FaBars size={25} />
        </button>
      </div>

        <div className="flex item-start">
           {!isMobile ? <MiniSidebar/> : null }
          </div> 
      </>
  ); 
};

export default Profile;
