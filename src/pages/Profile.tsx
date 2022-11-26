import { FC, useState , useRef  } from "react";
import Sidebar from "../components/Common/Sidebar";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MiniSidebar from "../components/Common/MiniSidebar";
import ProfileImage from "../components/Profile/ProfileImage";
import Email from '../components/Profile/Email'
import Name from '../components/Profile/Name'

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { isMobile } = useCurrentViewPort();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isUpdating , setIsUpdating] = useState(false)
  const [isUpdatingEmail , setIsUpdatingEmail] = useState(false)
  const [isShowPromptReAuthFor , setIsShowPromptReAuthFor] = useState<string | undefined>()
  const emailValueRef = useRef<HTMLInputElement>(null!)
  const nameValueRef = useRef<HTMLInputElement>(null!)
  const [isUpdatingName , setIsUpdatingName] = useState(false)
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

      <div className="flex  md:flex-row flex-col-reverse item-start gap-4">
        {!isMobile ? <MiniSidebar /> : null}
        {isMobile ? (
          <Sidebar
            isSidebarOpen={isSidebarActive}
            setIsSidebarOpen={setIsSidebarActive}
          />
        ) : null}
        <ProfileImage />

        <div className="flex-grow">
          <div id="test" className="bg-white rounded-md   md:h-[90%] p-[40px]  w-[100%] md:w-[90%] mt-10 ml-10 ">
            <p className="text-lg font-bold pb-4"> User Info </p>
            <p>Here you can edit public information about yourself.</p>
            <p>
              If you signed in with Google or Facebook, you can't change your
              email and password.
            </p>
            <div className="mt-7 max-w-[600px] w-full flex flex-col gap-3">
               <Email
                 isUpdatingEmail={isUpdatingEmail}
                 setIsUpdatingEmail={setIsUpdatingEmail}
                 emailValueRef={emailValueRef}
                 setIsShowPromptReAuthFor={setIsShowPromptReAuthFor}
                />
{/* 
                <Name  setIsUpdatingName={setIsUpdatingName} isUpdatingName={isUpdatingNametingName}> */}

                <Name isUpdatingName={isUpdatingName} setIsUpdatingName={setIsUpdatingName} nameValueRef={nameValueRef}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
