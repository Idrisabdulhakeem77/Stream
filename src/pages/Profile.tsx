import { FC, useState, useRef } from "react";
import Sidebar from "../components/Common/Sidebar";
import { useCurrentViewPort } from "../components/hooks/useCurrentViewPort";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MiniSidebar from "../components/Common/MiniSidebar";
import ProfileImage from "../components/Profile/ProfileImage";
import Email from "../components/Profile/Email";
import Name from "../components/Profile/Name";
import EmailVerication from "../components/Profile/EmailVeridication";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { isMobile } = useCurrentViewPort();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [isShowPromptReAuthFor, setIsShowPromptReAuthFor] = useState<
    string | undefined
  >();
  const emailValueRef = useRef<HTMLInputElement>(null!);
  const oldPasswordRef = useRef<HTMLInputElement>(null!);
  const nameValueRef = useRef<HTMLInputElement>(null!);
  const [isUpdatingName, setIsUpdatingName] = useState(false);
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

      {isShowPromptReAuthFor && (
        <>
          <form className="z-10 fixed md:w-[500px] md:min-h-[200px] min-h-[230px] top-[40%] md:left-[35%] left-[5%] right-[5%] bg-dark-lighten rounded-md px-3 py-2">
            <p className="text-lg font-medium text-center mb-2">
              {" "}
              Type Your password to reauthentificate
            </p>
            <input
              type="password"
              ref={oldPasswordRef}
              autoFocus
              className="w-full rounded-md outline-none px-2 py-4 mt-3 mb-4"
              placeholder="Type in Your password..."
            />
            <button className="px-4 py-6 rounded-xl transition duration-300 hover:brightness-125 md:top-[130px] top-[160px] tw-absolute-center-horizontal">
              Continue{" "}
            </button>
          </form>
          <div
            onClick={() => setIsShowPromptReAuthFor(undefined)}
            className="fixed z-[5] h-full w-full top-0 left-0 bg-black/60"
          ></div>
        </>
      )}

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
          <div
            id="test"
            className="bg-white rounded-md   md:h-[90%] p-[40px]  w-[100%] md:w-[90%] mt-10 ml-10 "
          >
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

              <Name
                isUpdatingName={isUpdatingName}
                setIsUpdatingName={setIsUpdatingName}
                nameValueRef={nameValueRef}
              />
            </div>
              
             <EmailVerication setIsUpdating={setIsUpdating}/> 

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
