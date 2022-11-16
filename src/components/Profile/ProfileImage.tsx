import { FunctionComponent } from "react";
import  {useAppSelector} from '../../store/hooks'
 
interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
    const currentUser = useAppSelector(state => state.user.user)
  return (
     <div className="shrink-0 md:max-w-[450px] w-full border-solid border-black">
          
     </div>
  );
};

export default ProfileImage;
