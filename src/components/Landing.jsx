import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidNavigation } from "react-icons/bi";

function Landing() {
  return (
    <div className="bg-primary grid-cols-2 min-h-screen">
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-gray-50 grid-cols-1 font-outfit text-6xl lg:text-[8rem]">
          Full Stack <br />
          Developer
        </h1>
      </div>
      <div className="p-10">
        <p className=" font-sans text-gray-50 font-normal mt-10">
          Hi there! I’m Sumit Mazumdar, a passionate Full Stack Developer with
          expertise in building dynamic and responsive web applications. With a
          strong foundation in both front-end and back-end technologies, I
          strive to create seamless user experiences and efficient, scalable
          solutions.
        </p>
      </div>
      <div className="p-10 grid grid-cols-2 gap-4">
        <div className="text-gray-50 mt-16">
          <button className="flex justify-center items-center gap-2 bg-black h-14 w-36 lg:w-40 rounded-full">
            Drop me a line{" "}
            <div>
              <BiSolidNavigation />
            </div>
          </button>
        </div>
        <div className="lg:flex lg:flex-row justify-center lg:gap-4 mt-16">
          <p className=" text-gray-300 underline">Let’s get connected</p>
          <div>
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-2 text-gray-50 lg:text-3xl">
              <li className=" hover:text-gray-400 hover:text-xl hover:duration-200 lg:hover:text-4xl">
                <FaLinkedin />
              </li>
              <li className=" hover:text-gray-400 hover:text-xl hover:duration-200 lg:hover:text-4xl">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
