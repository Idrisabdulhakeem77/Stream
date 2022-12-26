import { ChangeEvent, FunctionComponent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppSelector } from "../../store/hooks";
import { HiOutlineUpload } from "react-icons/hi";
import axios from "axios";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../shared/firebase";

interface ProfileImageProps {}

const ProfileImage: FunctionComponent<ProfileImageProps> = () => {
  const [isUpdatingImage, setIsUpdatingImage] = useState(false);
  const user = useAppSelector((state) => state.user.user);

  const updateProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUpdatingImage(true);

      if (!user) return;

      const form = new FormData();
      //@ts-ignore
      form.append("image", e.target.files[0]);

      const res = await axios({
        method: "post",
        url: " https://api.imgbb.com/1/upload?key=18f5699601f1c15023f6005cf0972bf2 ",
        data: form,
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      updateDoc(doc(db, "users", user.uid), {
        photoUrl: res.data.data.display_url,
      }).finally(() => setIsUpdatingImage(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="rounded-md   md:h-[50vh] p-[40px]  w-[100%] md:w-[30vw] ">
      <h1 className="text-3xl font-semibold pb-6 text-center">
        {user?.displayName}
      </h1>
      <LazyLoadImage
        src={(user?.photoURL as string) || "/Images/user.svg"}
        alt="profile-image"
        className="h-[130px]  w-[130px] object-cover rounded-full mx-auto"
      />

      {isUpdatingImage && (
        <div className="border-[4px] border-white border-t-transparent h-12 w-12 rounded-full animate-spin absolute top-[40%] left-[40%] z-10"></div>
      )}

      <label
        htmlFor="upload-image"
        className="flex items-center gap-2 px-4 py-3 mt-4 mb-4 place-items-center w-[70%] mx-auto transition duration-300  bg-green-400 rounded-full"
      >
        <HiOutlineUpload size={25} />
        <p> Upload a New Image </p>{" "}
      </label>

      <input
        type="file"
        accept="image/*"
        id="upload-image"
        className="hidden"
        onChange={updateProfileImage}
      />
    </div>
  );
};

export default ProfileImage;
