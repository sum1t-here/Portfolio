import { FaExternalLinkSquareAlt } from "react-icons/fa";
import CityNest from "../assets/images/citynest.png";

function Portfolio() {
  return (
    <div className="m-3 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gray-300 flex justify-center items-center lg:flex-row flex-col p-3 rounded-box w-full lg:w-3/4">
          <div className="p-3 w-full lg:w-auto flex justify-center">
            <img
              src={CityNest}
              alt="citynest"
              className="h-36 w-full lg:w-auto"
            />
          </div>
          <div className="w-full lg:w-auto">
            <div className="p-3">
              <p className="font-inter">
                City Nest is a premier real estate agency specializing in
                assisting clients with buying, selling, and renting properties
                in vibrant urban environments.
              </p>
            </div>
            <div className="flex gap-1 justify-center lg:justify-start flex-col lg:flex-row">
              <div className="font-sans">Tech stack :</div>
              <div>MongoDB, ReactJS, ExpressJS, Firebase</div>
            </div>
            <div className="flex gap-3 justify-center lg:justify-end p-3">
              <div className="flex items-center underline cursor-pointer">
                Live <FaExternalLinkSquareAlt />
              </div>
              <div className="flex items-center underline cursor-pointer">
                Github <FaExternalLinkSquareAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
