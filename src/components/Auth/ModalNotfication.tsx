import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface ModalNotificationProps {
  type: string;
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
    } else {
      setError("");
    }
    //eslint-disable-next-line
  }, [isCloseModalAutomatically]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `${
            type === "success" ? "url(/Images/success)" : "url(/Images/fail)"
          } `

        }}
        className="bg-cover bg-no-repeat bg-center min-h-[450px] w-full max-w-[350px] fixed rounded-xl z-20 tw-absolute-center"
      >
        <div className="mt-[230px] font-bold text-black text-[40px] text-center">
          {type === "success" ? "Successfully Logged in! 🤓" : "oooppss 😑"}
        </div>
      </div>
    </>
  );
};

export default ModalNotification;
