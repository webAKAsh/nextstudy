import React from "react";
import Image from 'next/image'
import { signOut } from "next-auth/react"
import { MdLogout } from 'react-icons/md';

const Navbar = () => {

  return (
<nav
  className="
  relative
  w-full
  flex sm:flex-wrap
  items-center
  justify-center
  sm:justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
>
  <div className="container-fluid w-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:justify-between space-x-4 space-y-3 px-6">
    <Image src="/main_logo.svg" alt='celetel' width="200px" height="50px"/>
    
    <form className="flex items-center">   
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
        </div>
    </form>


    <div className="flex items-center relative">
      <div className="dropdown relative">
        <MdLogout onClick={(e) => {
          e.preventDefault()
          signOut({
            callbackUrl: "/"
          });
          }} className="text-2xl mr-4 cursor-pointer"/>
      </div>
      <div className="dropdown relative">
        <a
          className="
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    mr-4
    dropdown-toggle
    hidden-arrow
    flex items-center
  "
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            className="w-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="dropdown relative">
        <a
          className="dropdown-toggle flex items-center hidden-arrow"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            className="rounded-full"
            style={{ height: 50, width: 50 }}
            alt="pic"
            loading="lazy"
          />
        </a>
        <ul
          className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a
              className="
  dropdown-item
  text-sm
  py-2
  px-4
  font-normal
  block
  w-full
  whitespace-nowrap
  bg-transparent
  text-gray-700
  hover:bg-gray-100
"
              href="#"
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="
  dropdown-item
  text-sm
  py-2
  px-4
  font-normal
  block
  w-full
  whitespace-nowrap
  bg-transparent
  text-gray-700
  hover:bg-gray-100
"
              href="#"
            >
              Another action
            </a>
          </li>
          <li>
            <a
              className="
  dropdown-item
  text-sm
  py-2
  px-4
  font-normal
  block
  w-full
  whitespace-nowrap
  bg-transparent
  text-gray-700
  hover:bg-gray-100
"
              href="#"
            >
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
