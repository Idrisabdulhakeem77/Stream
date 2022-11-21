import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <div className="bg-dark-lighten text-white flex justify-between items-center py-5 px-4 shadow-md mt-3 absolute bottom-0 w-full">
        <p>
          <span>Copyright@2022 Design by:Idris Abdulhakeem</span>
        </p>
        <div className="flex gap-3 items-center">
          <p className="hidden md:block"> Contact Me</p>
          <div className="flex gap-3">
            <a href="https://github.com/Idrisabdulhakeem77">
              <BsGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/ 
idris-abdulhakeem
"
            >
              <BsLinkedin size={20} />
            </a>

            <a href="https://web.facebook.com/profile.php?id=100073301900842">
              <BsFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
