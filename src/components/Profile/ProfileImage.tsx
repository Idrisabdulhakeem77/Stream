import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../store/hooks";
import { HiOutlineUpload } from "react-icons/hi";

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  return (
    // className="shrink-0 md:max-w-[500px] border-b-2 border-black px-6 py-2 text-center"
    <div  id="text-form" className="bg-white rounded-md">
      <h1 className="text-3xl font-semibold pb-6 text-center"> {currentUser?.displayName}</h1>
      <LazyLoadImage
        src="/Images/user.svg"
        alt="profile-image"
        className="h-[130px]  w-[130px] object-cover rounded-full mx-auto"
      />
      {/* */}

      <label
        htmlFor="upload-image"
        className="flex items-center gap-2 px-5 py-3 mt-4 mb-4 place-items-center w-[80%] mx-auto transition duration-300  bg-green-400 rounded-full border-t border-black"
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

      <label htmlFor="bio" className="block mb-2  font-medium text-lg  text-gray-900 ">
        Bio
      </label>
      <textarea
        id="bio"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Write About Your Self...."
      ></textarea>
    </div>
  );
};

export default ProfileImage;
