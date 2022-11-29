
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface ModalNotificationProps {
  type: "success" | "error";
  setError?: any;
  message: string;
}

const TIMEOUT_AUTO_CLOSE_ERROR = 5;
const TIMEOUT_AUTO_CLOSE_SUCCESS = 2;

const ModalNotification: FunctionComponent<ModalNotificationProps> = ({
  type,
  message,
  setError,
}) => {
  const [timeLeft, setTimeLeft] = useState(
    type === "success" ? TIMEOUT_AUTO_CLOSE_SUCCESS : TIMEOUT_AUTO_CLOSE_ERROR
  );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isCloseModalAutomatically = timeLeft === 0;

  useEffect(() => {
    if (isCloseModalAutomatically) {
      navigate(searchParams.get("redirect") || "/");
    } 
    //eslint-disable-next-line
  }, [isCloseModalAutomatically]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeout);
  }, []);

  const checkSuccess = () => {
    if (type === "success") {
      navigate(`${searchParams.get("redirect") || "/"}`);
    } else {
      // setError("");
    }
  };


  return (
    <>
      <div
        style={{
          backgroundImage: `${ type === "success" ? "url(/Images/success.jpg)" : "url(/Images/fail.jpg)"}`
        }}
        className="bg-cover bg-no-repeat bg-center min-h-[450px] w-full max-w-[350px] fixed rounded-xl z-20 tw-absolute-center text-center"
      >
        <div className="mt-[230px] font-bold text-black text-[40px]  text-centert">
          {type === "success" ? "Yeah! 🤓" : "oooppss 😑"}
        </div>
        <p className="text-center mt-1 text-xl text-gray-600">
          {message}
          <br />
          {type === "success" ? (
            <span className="text-black text-center mt-1">"Yay lets goooo!!"👊</span>
          ) : (
            <span className="text-black text-center "> Stay put and try again ✊ </span>
          )}
        </p>
        <button onClick={checkSuccess}  className={`${ type === "success" ? "bg-green-600 shadow-md hover:bg-green-800" : "bg-red-500 shadow-md hover:bg-red-700"} flex gap-2 transition duration-300 px-4 py-2 items-center rounded-md absolute left-1/2 -translate-x-1/2 mt-5 `}>
          <p className="text-black font-3x"> {type === "success" ? "CONTINUE" : "TRY AGAIN"}</p>
          <p className="text-black"> ({timeLeft})</p>
        </button>
      </div>
      <div
        // onClick={setError("")}
        className="fixed h-full w-full top-0 left-0 z-13 bg-black"
      ></div>
    </>
  );
};

export default ModalNotification;
