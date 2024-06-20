import BlogImg from "../assets/images/blogs.avif";
import template from "../assets/images/template.avif";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function Blogs() {
  return (
    <div className="relative min-h-screen flex flex-col m-6">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 flex-grow">
        <div className="lg:col-span-2">
          <img
            src={BlogImg}
            alt="blogImage"
            className="h-80 rounded-lg lg:w-full w-25"
          />
          <h1 className=" font-sans text-xl">Destructuring in Javascript</h1>
          <a
            href="https://sumitmazumdar.in/unleashing-the-power-of-destructuring-in-javascript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline font-outfit"
          >
            Click here to read...
          </a>
        </div>
        <div className="lg:col-span-1">
          <img
            src={template}
            alt="blogImage"
            className="h-80 rounded-lg lg:w-full w-25"
          />
          <h1 className=" font-sans text-xl">Templates in C++</h1>
          <a
            href="https://sumitmazumdar.in/template-in-cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline font-outfit"
          >
            Click here to read...
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex items-center justify-end p-4">
        <span className="mr-2 underline cursor-pointer">Visit for more</span>{" "}
        <FaExternalLinkSquareAlt className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Blogs;
