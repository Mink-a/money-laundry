"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AlignRightIcon, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

import { usePathname } from "next/navigation";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="">
      <div className="bg-[#DFF6FF] text-sm">
          <div className='max-w-screen-xl mx-auto flex items-center justify-between p-2 '>
            <p>+959 7980 65880</p>
            <p>UPDATES – Click Here for KBZ Money News Alerts – UPDATES</p>
            <p>admin@kbzmoney.com</p>
          </div>
      </div>
      <nav className='max-w-screen-xl mx-auto bg-white border-gray-200 dark:bg-gray-900'>
        <div className=' flex flex-wrap items-center justify-between  p-4'>
          <a href='/' className='flex items-center'>
            <img src='/comp-logo.png' className='h-8 mr-3' alt='Comp Logo' />
          </a>
          <div className='flex md:order-2'>
            <div className={`mr-3 ${searchOpen ? "block" : "hidden"}`}>
              <Input className='w-full' placeholder='Search' />
            </div>
            <Button
              className='rounded-lg'
              variant='ghost'
              size='icon'
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <SearchIcon />
            </Button>
            <Button
              className='rounded-lg md:hidden'
              variant='ghost'
              size='icon'
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <AlignRightIcon />
            </Button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id='navbar-search'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='/'
                  className={`block py-2 pl-3 pr-4 rounded  md:p-0 md:dark:text-blue-500 ${
                    pathname === "/"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                      : "text-gray-900"
                  }`}
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/blog'
                  className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathname.startsWith("/blog")
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                      : "text-gray-900"
                  }`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
