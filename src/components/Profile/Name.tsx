import { AiOutlineEdit } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { useAppSelector } from "../../store/hooks";

interface NameProps {
  setIsUpdatingName: any;
  isUpdatingName: boolean;
  nameValueRef : any
}

const Name = ({ setIsUpdatingName, isUpdatingName , nameValueRef }: NameProps) => {
   
     const user = useAppSelector(state => state.user.user)

  return (
    <>
      {!isUpdatingName && (
        <>
          <p className="text-lg">Name</p>

          <div className="flex justify-between mt-1">
          <p> {user?.displayName} </p>
          <button
           onClick={() => setIsUpdatingName(true)}
          > 
             <AiOutlineEdit size={25}/>
          </button>
          </div>
        </>
      )}

      { isUpdatingName && (
         <>
            <form>
                <input
                 type="text"
                 ref={nameValueRef}
               />
               <button
                className="hover:text-primary transition duration-300"
               onClick={() => setIsUpdatingName(false)}>
                   <BiSend size={25}/>
                  </button>     
            </form> 
            <p> Tap on Esc to cancel </p>
          </>
      )  
       }
    </>
  );
};

export default Name;
