import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function NewsLetter() {
  return (
    <section className='bg-indigo-300'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto grid lg:grid-cols-2 items-center'>
        <h1 className='mb-4 max-w-[80%] text-xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-2xl xl:text-3xl dark:text-white'>
          Subscribe Newsletter &amp; get Optima Alerts
        </h1>
        <div className='flex w-full items-center space-x-4'>
          <Input
            type='email'
            placeholder='Email Address'
            className='h-12 max-w-md text-base'
          />
          <Button type='submit' className='rounded-lg text-base lg:px-16 h-12'>
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
