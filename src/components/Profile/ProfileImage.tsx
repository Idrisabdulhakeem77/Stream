import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../store/hooks";
import { HiOutlineUpload } from "react-icons/hi";

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  return (
    // className="shrink-0 md:max-w-[500px] border-b-2 border-black px-6 py-2 text-center"
    <div  id="text-form" className="bg-white rounded-md h-[50vh] p-[40px] w-[30vw] mt-10 ml-10">
      <h1 className="text-3xl font-semibold pb-6 text-center"> {currentUser?.displayName}</h1>
      <LazyLoadImage
        src="/Images/user.svg"
        alt="profile-image"
        className="h-[130px]  w-[130px] object-cover rounded-full mx-auto"
      />
      {/* */}

      <label
        htmlFor="upload-image"
        className="flex items-center gap-2 px-5 py-3 mt-4 mb-4 place-items-center w-[80%] mx-auto transition duration-300  bg-green-400 rounded-full"
      >
        <HiOutlineUpload size={25} />
        <p> Upload a New Image </p>{" "}
      </label>

      <input
        type="file"
        accept="image/*"
        id="upload-image"
        className="hidden"
      />
    </div>
  );
};

export default ProfileImage;
