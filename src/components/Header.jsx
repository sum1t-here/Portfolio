import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row shadow-md sticky top-0 z-10 h-16 items-center bg-slate-50 justify-between px-5 lg:px-20">
      <div className="font-sans font-semibold lg:font-bold">
        <Link to="/" className=" text-xs lg:text-xl">
          Sumit Mazumdar
        </Link>
      </div>
      <div>
        <ul className="flex flex-row gap-5 font-inter text-xs font-normal lg:font-medium lg:text-base items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <button className="bg-[#A1DDC7] rounded-btn p-2 hover:bg-[#98dbc2] hover:h-11 hover:w-20">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
