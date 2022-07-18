import React from 'react'
import Link from "next/link";
import Navbar from '../Navbar';

const Dlayout = ({children}) => {
    const todoNavigation = [
      {
          href:"/Home",title:"Home"
      },
      {
          href:"/Matches",title:"Matches"
      },
      {
          href:"/Manage",title:"Manage sources"
      },
      {
          href:"/Integration",title:"Integration"
      },
      {
          href:"/Alerts",title:"Alerts"
      },
  ]
  return (
    <>
        <Navbar />
        <div className='flex justify-center flex-col md:grid md:grid-cols-5'>
        <aside className="w-full" aria-label="Sidebar">
            <div className="overflow-y-auto h-full py-4 px-3 bg-gray-50 md:rounded dark:bg-gray-800">
                <ul className="space-y-2 flex justify-center flex-wrap items-center md:block ">
                {todoNavigation.map(({href, title}) => (
                    <li key={title}>
                        <Link href={href}>
                            <a
                                href="#"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                            </a>
                        </Link>
                    </li>
                ))}
                </ul>
                <ul className="flex justify-center md:block md:pt-2 md:mt-2 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                    <a
                        href="#"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                    >
                        <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="gem"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        >
                        <path
                            fill="currentColor"
                            d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                        ></path>
                        </svg>
                        <span className="ml-4">Settings</span>
                    </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main className='md:col-span-4'>{children}</main>
        </div>
    </>

  )
}

export default Dlayout