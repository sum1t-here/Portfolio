import Javascript from "../assets/images/js.webp";
import Typescript from "../assets/images/Typescript.svg";
import React from "../assets/images/react-logo.svg";
import Hono from "../assets/images/hono.png";
import Express from "../assets/images/express.webp";
import Next from "../assets/images/nextjs.webp";
import Git from "../assets/images/git.webp";
import Figma from "../assets/images/figma.svg";
import Cloudflare from "../assets/images/cloudflare.webp";
import Mongo from "../assets/images/mongo.webp";
import Psql from "../assets/images/postgresql.svg";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:min-h-screen">
      <p className=" font-outfit p-5 font-bold text-3xl">Professional Skills</p>
      <div>
        <p className="font-sans p-5">
          Experienced Full Stack Developer proficient in both development and
          project design.
        </p>
      </div>
      <div>
        <h1 className="font-outfit font-bold m-2">
          Softwares, Languages & Tools :
        </h1>
      </div>
      <div className="font-sans">
        <div className="flex items-center gap-6">
          <p>Language : </p>
          <ul className="flex gap-2 items-center">
            <li>
              <img
                src={Javascript}
                alt="Javascript"
                className=" h-10 rounded-sm"
              />
            </li>
            <li>
              <img
                src={Typescript}
                alt="Typescript"
                className=" h-7 rounded-sm"
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p>Library/Framework: </p>
          <ul className="flex gap-2 items-center">
            <li>
              <img
                src={React}
                alt="React"
                className="h-10 w-10 rounded-sm mt-5 lg:mt-0"
              />
            </li>
            <li>
              <img src={Hono} alt="Hono" className="h-10 rounded-sm" />
            </li>
            <li>
              <img src={Express} alt="Express" className="h-10 rounded-sm" />
            </li>
            <li>
              <img src={Next} alt="Next" className=" h-20 rounded-sm" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p>Databse : </p>
          <ul className="flex gap-2 items-center">
            <li>
              <img src={Mongo} alt="React" className="h-10 w-10 rounded-sm" />
            </li>
            <li>
              <img src={Psql} alt="Hono" className="h-10 rounded-sm" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p>Version Control System : </p>
          <ul className="flex gap-2 items-center">
            <li>
              <img src={Git} alt="github" className="h-10" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p>UI/UX :</p>
          <ul className="flex gap-2 items-center">
            <li>
              <img src={Figma} alt="figma" className="h-10" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p>Other tools :</p>
          <ul className="flex gap-2 items-center">
            <img src={Cloudflare} alt="cloudflare" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
