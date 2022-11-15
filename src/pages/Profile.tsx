import { FC , useState } from "react";
import Sidebar from '../components/Common/Sidebar'
import  {useCurrentViewPort} from '../components/hooks/useCurrentViewPort'

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const {isMobile} = useCurrentViewPort()
  const [isSidebarActive , setIsSidebarActive] = useState(false)
  return ( 
     <>
       { !isMobile ? <Sidebar isSidebarOpen={isSidebarActive} setIsSidebarOpen={setIsSidebarActive}/> : null}
      
      </>
  ); 
};

export default Profile;
