import { ChevronRightIcon } from "lucide-react";
import React from "react";

function Title({ title }: { title: string }) {
  return (
    <div className=' bg-[#06458D]'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto text-center text-white space-y-3'>
        <h1 className=' text-xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-2xl xl:text-3xl dark:text-white'>
          {title}
        </h1>
        <div className='text-center space-x-4'>
          <span>Home</span>
          <ChevronRightIcon className='inline w-4 h-4' />
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
}

export default Title;
