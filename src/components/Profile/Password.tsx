interface PasswordProps {
  setIsUpdatedPassword: any;
  isUpdatedPassword: boolean;
  newPasswordRef: any;
  setUpdatedPassword: any;
}

const Password = ({
  setIsUpdatedPassword,
  isUpdatedPassword,
  newPasswordRef,
  setUpdatedPassword,
}: PasswordProps) => {
  return (
    <>
      {isUpdatedPassword && (
        <>
          <div className="px-5 py-3 rounded-md z-10 bg-dark-lighten-2 md:w-[350px] fixed top-[35%] md:left-[35%] left-[5%] right-[5%] min-h-[100px]">
            <p className="text-white text-lg text-center">
              Updating password successfully
            </p>
            <button
              onClick={() => setUpdatedPassword(false)}
              className="px-6 py-1 bg-dark-lighten rounded-full mt-3 tw-absolute-center-horizontal hover:brightness-75 transition duration-300"
            >
              OK
            </button>
          </div>
          <div
            onClick={() => setUpdatedPassword(false)}
            className="fixed top-0 left-0 w-full h-full z-[5] bg-black/60"
          ></div>
        </>
      )}

      <div>
        <p className="mt-4">Change Password</p>
        <form className="flex justify-between gap-30 items-center">
          <div className="flex-1">
            <input
              type="passworsd"
              ref={newPasswordRef}
              autoFocus
              placeholder="New password"
              className="bg-dark-lighten py-3 rounded-md  outline-none px-5 text-red w-full"
            />
          </div>

          <button className="px-2 py-4 rounded-md transition duration-300  ">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Password;
