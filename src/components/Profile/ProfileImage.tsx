import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../store/hooks";
import { BsTrash } from "react-icons/bs";
import {HiOutlineUpload} from 'react-icons/hi'

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  return (
    <div className="shrink-0 md:max-w-[450px] w-full border-b-2 border-black">
      <h1> {currentUser?.displayName}</h1>
      <LazyLoadImage
        src="/Images/user.svg"
        alt="profile-image"
        className="h-[200px]  w-[200px] object-cover rounded-full"
      />
      <button className="absolute top-12 left-48">
        <BsTrash size={20} />
      </button>

      <label htmlFor="upload-image" className="flex items-center gap-2 px-5 py-3 mt-2"> 
      <HiOutlineUpload size={25} />
      <p> Upload a New Image </p> </label>
      
      <input type="file" accept="image/*" id="upload-image" className="hidden" />

      <h1> Bio </h1>
      <textarea></textarea>
    </div>
  );
};

export default ProfileImage;
