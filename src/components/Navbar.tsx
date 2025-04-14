"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center">
        <div className="text-teal-800 text-xl font-bold uppercase tracking-[.1.5em] lg:tracking-[.25em] md:tracking-[.1.5em]">
          <Link href="/">Circlify</Link>
        </div>
        <div
          className={`${
            isOpen ? "hidden" : "hidden"
          } lg:flex lg:items-center lg:justify-between lg:w-auto m-auto`}
        >
          <div className="text-md font-medium lg:flex-grow flex items-center">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#115E59"
                    d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"
                  />
                </svg>

                <span className="ml-2">Home</span>
              </div>
            </Link>
            <Link
              href="/friends"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#115E59"
                    d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.063 8.063 0 0 0 16 21.125a8.063 8.063 0 0 0-3.469-3.281A6.006 6.006 0 0 0 15 13c0-3.3-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"
                  />
                </svg>

                <span className="ml-2">Friends</span>
              </div>
            </Link>
            {/* <Link
              href="/groups"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="#115E59"
                    d="M1850 688q45 25 82 61t62 80t40 93t14 102h-128q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99q0 91-41 173t-115 136q65 33 117 81t90 108t57 128t20 142h-128q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149H512q0-73 20-141t57-128t89-108t118-82q-73-54-114-136t-42-173q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99H0q0-52 14-101t39-93t63-80t82-62q-33-35-51-81t-19-95q0-52 20-99t55-81t81-55t100-21q52 0 99 20t81 55t55 82t21 99q0 49-18 95t-52 81q82 45 134 124q54-80 138-126t182-46q97 0 181 46t139 126q52-79 134-124q-33-35-51-81t-19-95q0-52 20-99t55-81t81-55t100-21q52 0 99 20t81 55t55 82t21 99q0 49-18 95t-52 81M256 512q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50m768 768q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99q0 53 20 99t55 81t81 55t100 21m512-768q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50"
                  />
                </svg>

                <span className="ml-2">Groups</span>
              </div>
            </Link> */}
            <Link
              href="/stories"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#115E59"
                    d="M12.75 7.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"
                  />
                  <path
                    fill="#115E59"
                    d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"
                  />
                </svg>
                <span className="ml-2">Stories</span>
              </div>
            </Link>
            {/* <Link
              href="/profile"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="#115E59"
                      className="hover:stroke-teal-950"
                      strokeWidth="1.5"
                      d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                    />
                    <path
                      fill="#115E59"
                      d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.752 4.752 0 0 0-4.553 3.392l1.438.428A3.252 3.252 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.752 4.752 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z"
                    />
                  </g>
                </svg>
                <span className="ml-2">Profile</span>
              </div>
            </Link> */}
            <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6">
              <div className="hidden xl:flex bg-slate-100 rounded-full px-3 py-1 justify-between">
                <input
                  type="text"
                  placeholder="Search"
                  className="text-teal-800 font-normal bg-transparent outline-none"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="#115E59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:mt-0 text-teal-700 hover:text-teal-950 ml-auto mr-2">
          <ClerkLoading>
            <svg
              width="20"
              height="20"
              fill="#115E59"
              className="mr-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer mr-5 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 2048 2048"><path fill="#115E59" d="M1850 688q45 25 82 61t62 80t40 93t14 102h-128q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99q0 91-41 173t-115 136q65 33 117 81t90 108t57 128t20 142h-128q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149H512q0-73 20-141t57-128t89-108t118-82q-73-54-114-136t-42-173q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99H0q0-52 14-101t39-93t63-80t82-62q-33-35-51-81t-19-95q0-52 20-99t55-81t81-55t100-21q52 0 99 20t81 55t55 82t21 99q0 49-18 95t-52 81q82 45 134 124q54-80 138-126t182-46q97 0 181 46t139 126q52-79 134-124q-33-35-51-81t-19-95q0-52 20-99t55-81t81-55t100-21q52 0 99 20t81 55t55 82t21 99q0 49-18 95t-52 81M256 512q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50m768 768q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99q0 53 20 99t55 81t81 55t100 21m512-768q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50"/></svg>
              </div>
              <div className="cursor-pointer mr-5 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="#115E59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 14.5h7m-7-5H12m2.17 11.39c4.184-.277 7.516-3.657 7.79-7.9c.053-.83.053-1.69 0-2.52c-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9a20 20 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184c.467.845.159 1.9-.328 2.823c-.35.665-.526.997-.385 1.237c.14.24.455.248 1.084.263c1.245.03 2.084-.322 2.75-.813c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34c1.425.094 2.914.094 4.342 0" color="#115E59"/></svg>
              </div>
              <div className="cursor-pointer mr-5 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="#115E59" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"/><circle cx="12" cy="3" r="1"/></g></svg>
              </div>
              <UserButton/>
            </SignedIn>
            <SignedOut>
              <div className="cursor-pointer flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="#115E59"
                      className="hover:stroke-teal-950"
                      strokeWidth="1.5"
                      d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                    />
                    <path
                      fill="#115E59"
                      d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.752 4.752 0 0 0-4.553 3.392l1.438.428A3.252 3.252 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.752 4.752 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z"
                    />
                  </g>
                </svg>
                <Link href="/sign-in" className="ml-2">
                  Login/Register
                </Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-teal-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#115E59"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 6h14M5 12h14M5 18h14"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="text-md font-medium lg:flex-grow">
          <Link
            href="/"
            className="block text-center mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
          >
            Home
          </Link>
          <Link
            href="/friends"
            className="block text-center mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
          >
            Friends
          </Link>
          <Link
            href="/groups"
            className="block text-center mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
          >
            Groups
          </Link>
          <Link
            href="/stories"
            className="block text-center mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
          >
            Stories
          </Link>
          <Link
            href="/profile"
            className="block text-center mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-teal-950 mr-6"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
