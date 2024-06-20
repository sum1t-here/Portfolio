import { FaExternalLinkSquareAlt } from "react-icons/fa";
import CityNest from "../assets/images/citynest.png";
function SelectedWork() {
  return (
    <div className="min-h-screen p-2 shadow-md">
      <div className="flex flex-col justify-center items-center">
        <div className="p-3 font-outfit text-3xl font-bold">
          <p>Selected Works</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className=" col-span-2 lg:col-span-1 bg-gray-200 p-2 rounded-box flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src={CityNest} alt="citynest" className=" h-auto p-5" />
              <div className="flex flex-col justify-center items-center">
                <p>CityNest</p>
                <p>Tech stack: Mongo Db, React Js, Express Js, Firebase</p>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex items-center underline cursor-pointer">
                  Live <FaExternalLinkSquareAlt />
                </div>
                <div className="flex items-center underline cursor-pointer">
                  Github
                  <FaExternalLinkSquareAlt />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-2 lg:col-span-1 bg-gray-200 p-2 rounded-box flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src={CityNest} alt="citynest" className=" h-auto p-5" />
              <div className="flex flex-col justify-center items-center">
                <p>CityNest</p>
                <p>Tech stack: Mongo Db, React Js, Express Js, Firebase</p>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex items-center underline cursor-pointer">
                  Live <FaExternalLinkSquareAlt />
                </div>
                <div className="flex items-center underline cursor-pointer">
                  Github
                  <FaExternalLinkSquareAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedWork;
