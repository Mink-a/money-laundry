import { UsersIcon } from "lucide-react";
import React from "react";

function OurServices() {
  return (
    <section className='max-w-screen-xl px-4 py-8 mx-auto'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
          Our Services
        </h1>
        <p className='leading-loose mb-3'>
          Rhoncus mattis rhoncus urna neque viverra justo nec. Magna etiam
          tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-3 text-center'>
        <div className='w-full  bg-gray-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Consulting</h3>
        </div>
        <div className='w-full  bg-blue-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Licensing</h3>
        </div>
        <div className='w-full  bg-pink-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Training</h3>
        </div>
        <div className='w-full  bg-gray-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Correspondent Account</h3>
        </div>
        <div className='w-full  bg-gray-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Independent AML/BSA Reviews</h3>
        </div>
        <div className='w-full  bg-gray-400 py-8'>
          <UsersIcon className='mx-auto w-10 h-10 m-4' />
          <h3 className='text-lg lg:text-2xl'>Look Back Reviews</h3>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
