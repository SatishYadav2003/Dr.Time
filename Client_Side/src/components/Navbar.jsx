import React, { useState } from "react";
import Base from "../assets/Base.jpg";
import user from "../assets/user.png";
import "./Navbar.module.css"

function Navbar() {
  const handlerBurger = () => {
    if (!value) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  const handleUser = () => {
    if (!users) {
      setUsers(true);
    } else {
      setUsers(false);
    }
  };

  const hamburger = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handlerBurger}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </>
  );

  const searchBar = (
    <>
      <label className="flex items-center gap-2 px-5 py-4 border rounded-md  dark:text-black dark:bg-white mt-5 mx-3">
        <input
          type="text"
          className="grow outline-none "
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-90 hover:text-blue-400  duration-300"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );

  const closeHandler = () => {
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  };

  const list = ["Home", "Account", "Contact", "About", "Pricing"];

  const [value, setValue] = useState(false);
  const [users, setUsers] = useState(false);

  return (
    <div className={`max-w-screen-2xl container mx-auto p-5 `}>
      <nav className="flex items-center justify-between  md:px-5 py-3 sticky left-0 top-0 md:mx-10">
        <img src={Base} alt="" className="w-14 " />
        <ul className="md:flex hidden ">
          {list.map((value, index) => (
            <li key={index} className="mx-5 hover:cursor-pointer ">
              {value}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <img
            src={user}
            alt=""
            className="w-9 h-9 bg-blue-300 rounded-full hover:cursor-pointer"
            onClick={handleUser}
          />
          {hamburger}
        </div>
      </nav>

      <div
        className={`user absolute 2xl:right-20  md:right-20 top-24 right-5  bg-white rounded-xl text-xl drop-shadow-xl text-start md:w-80 w-60 px-5 py-3  ${
          users ? "block" : "hidden"
        } border`}
      >
        <ul className="space-y-3 ">
          <li className="hover:bg-slate-800 hover:text-white p-1 rounded-xl ps-3">
            Profile
          </li>
          <li className="hover:bg-slate-800 hover:text-white p-1 rounded-xl ps-3">
            Settings
          </li>
          <li className="hover:bg-slate-800 hover:text-white p-1 rounded-xl ps-3 text-red-600">
            Logout
          </li>
        </ul>
      </div>

      <div
        className={`h-screen w-full absolute top-0 left-0   ${
          value ? "block bg-white" : "hidden"
        }
        
        `}
      >
        <div className="first mt-10">{searchBar}</div>
        <div className="second ">
          <ul className="text-xl  mt-10  flex flex-col">
            {list.map((value, index) => (
              <li
                key={index}
                className="hover:bg-slate-50 w-full hover:cursor-pointer p-5  "
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="third w-full text-center mt-14">
          <button
            className="text-[20px] font-sans  bg-violet-700 text-white w-[80%] text-center p-4 rounded-md hover:bg-violet-800"
            onClick={closeHandler}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
