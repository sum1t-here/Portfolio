import { BiSolidNavigation } from "react-icons/bi";
import me from "../assets/images/me.png";

function Contact() {
  return (
    <div className="bg-[#A1DDC7] flex justify-center items-center">
      <div className="grid grid-cols-1 m-5 gap-4">
        <div className="relative flex justify-start">
          <div className="avatar">
            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={me} alt="Profile" />
            </div>
            <span className="absolute top-3 right-2 transform translate-x-1/2 -translate-y-1/2 block h-4 w-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
        <div>
          <p className="font-outfit font-semibold text-3xl text-center">
            Let’s talk about a project, collaboration, or an idea you may have
          </p>
        </div>
        <div className="flex justify-end mt-5">
          <button className="flex justify-center items-center gap-2 bg-black h-14 w-36 lg:w-40 rounded-full text-gray-50">
            Drop me a line{" "}
            <div>
              <BiSolidNavigation />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
