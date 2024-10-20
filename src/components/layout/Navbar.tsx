"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "/public/logo.png";
import Dropdown from "../shared/Dropdown";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-custom-blue sticky top-0 left-0 right-0 z-20">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="relative flex items-center justify-between py-5 w-full ">
          {/* LOGO */}
          <div className={`absolute left-0 md:top-6 top-12 z-10 m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px] ${navbar ? "hidden" : ""}`}>
            <Link href="/">
              <Image src={Logo} alt="logo" height={113} width={90} />
            </Link>
          </div>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="flex items-center justify-between w-full md:hidden">
            <div className="text-center w-full text-white font-bold opacity-75 text-lg">
              <span>Tuition Free Program</span>
            </div>
            <button
              className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border z-20"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                // Close Icon SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="30"
                  height="30"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Menu SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="30"
                  height="30"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

       {/* Middle Section for Large Screens */}
          <div className={`hidden md:flex w-full items-center justify-center relative ${navbar ? "hidden" : ""}`}>
            <span className="opacity-75 font-bold text-white lg:text-xl ">
              Tuition Free Education Program on Latest Technologies
            </span>
          </div>
        </div>

        {/* Links for Navigation */}
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex gap-x-8">
            <li className="text-[1,25rem] text-white py-2 text-start border-b-2 md:border-b-0 md:hover:bg-transparent">
              <Link href={"/"} onClick={() => setNavbar(false)}>
                Home
              </Link>
            </li>
            <li className="text-[1,25rem] text-white py-2 text-start border-b-2 md:border-b-0 md:hover:bg-transparent">
              <Link href={"/apply"} onClick={() => setNavbar(false)}>
                Apply
              </Link>
            </li>
            <li className="text-[1,25rem] text-white py-2 text-start border-b-2 md:border-b-0 md:hover:bg-transparent">
              <Link href={"/job"} onClick={() => setNavbar(false)}>
                Job
              </Link>
            </li>
            <li className="text-[1,25rem] text-white py-2 text-start border-b-2 md:border-b-0 md:hover:bg-transparent">
              <Link href={"/result"} onClick={() => setNavbar(false)}>
                Result
              </Link>
            </li>
            <li className="text-[1.,25rem] text-white py-2 flex items-center lg:flex-row justify-between text-center border-b-2 md:border-b-0 md:hover:bg-transparent">
              <Link href={"/courses"} onClick={() => setNavbar(false)}>
                Courses
              </Link>
              <div>
                <Dropdown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

